import React from 'react'
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native'
import { Item } from './item'
import { persist, retrieve } from './storage'
import { CreateItem } from './create_item'
import { withinBounds } from './geo'

class List extends React.Component {
  state = {
    itemIds: [],
    items: [],
    taggedItemIds: [],
    meta: {
      update: false
    }
  }

  async componentDidUpdate () {
    const { items, itemIds, meta: { update } } = this.state
    if (update) {
      await persist(items, 'items')
      this.setState(prevState => ({ ...prevState, meta: { update: false } }))
    }
  }

  async componentDidMount () {
    const rawItems = (await retrieve('items')) || '{}'
    const items = JSON.parse(rawItems)
    this.setState(() => ({ items, itemIds: Object.keys(items) }))

    this.determineTaggedItems()
  }

  async determineTaggedItems () {
    const rawItems = (await retrieve('items')) || '{}'
    const items = JSON.parse(rawItems)

    const pending = []
    const pendingIds = []
    for (let x in items) {
      const inRange = await withinBounds(items[x])
      if (inRange) {
        pending.push(inRange)
        pendingIds.push(x)
      }
    }

    Promise.all(pending).then(res => {
      this.setState(() => ({ taggedItemIds: pendingIds }))
    })
  }

  toggleItemStatus = item => {
    item.completed ? this.uncompleteItem(item) : this.completeItem(item)
  }

  completeItem = item => {
    this.setState(prev => ({
      ...prev,
      items: {
        ...prev.items,
        [item.id]: {
          ...item,
          completed: true
        }
      },
      meta: {
        update: true
      }
    }))
  }

  uncompleteItem = item => {
    this.setState(prev => ({
      ...prev,
      items: {
        ...prev.items,
        [item.id]: {
          ...item,
          completed: false
        }
      },
      meta: {
        update: true
      }
    }))
  }

  addItem = item => {
    this.setState(prev => ({
      ...prev,
      itemIds: prev.itemIds.concat(item.id),
      items: {
        ...prev.items,
        [item.id]: item
      },
      meta: {
        update: true
      }
    }))
  }

  deleteItem = item => {
    this.setState(prev => ({
      ...prev,
      itemIds: prev.itemIds.filter(x => x !== item.id),
      items: Object.keys(prev.items).reduce(
        (x, y) =>
          (String(y) !== String(item.id) ? { ...x, [y]: prev.items[y] } : x),
        {}
      ),
      meta: { update: true }
    }))
  }

  render () {
    const { itemIds, items, taggedItemIds } = this.state
    const { navigation: { state: { routeName } } } = this.props
    return (
      <ScrollView>
        <CreateItem onAddItem={this.addItem} />
        {itemIds
          .filter(x => {
            switch (routeName) {
              case 'All':
                return items[x]
                break
              case 'Incomplete':
                return !items[x].completed
                break
              case 'Complete':
                return items[x].completed
                break
              case 'Tagged Here':
                return taggedItemIds.includes(x)
                break
              default:
                return items[x]
            }
          })
          .map((id, index) => (
            <Item
              key={index}
              item={items[id]}
              onToggleComplete={this.toggleItemStatus}
              onDeleteItem={this.deleteItem}
            />
          ))}
      </ScrollView>
    )
  }
}

export { List }
