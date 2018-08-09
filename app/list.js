import React from 'react'
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native'
import { Item } from './item'
import { generateId } from './hash'
import { persist, retrieve } from './storage'

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
})

class List extends React.Component {
  static navigationOptions = {
    title: 'Home Items'
  }

  state = {
    itemIds: [],
    items: [],
    newItem: '',
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

  addItem = event => {
    const { newItem } = this.state
    const nextId = generateId()
    this.setState(prev => ({
      ...prev,
      newItem: '',
      itemIds: prev.itemIds.concat(nextId),
      items: {
        ...prev.items,
        [nextId]: {
          id: nextId,
          text: newItem,
          completed: false,
          visible: true
        }
      },
      meta: {
        update: true
      }
    }))
  }

  storeNewItemText = text => {
    console.log('store item text', text)
    this.setState(prev => ({ ...prev, newItem: text, meta: { update: false } }))
  }

  render () {
    const { itemIds, items, newItem } = this.state
    console.log(itemIds, items)
    return (
      <ScrollView>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder='Add something!'
          returnKeyType='done'
          onChangeText={this.storeNewItemText}
          onSubmitEditing={() => this.addItem()}
          value={newItem}
        />
        {itemIds
          .filter(x => items[x].visible)
          .map((id, index) => (
            <Item
              key={index}
              item={items[id]}
              onToggleComplete={this.toggleItemStatus}
            />
          ))}
      </ScrollView>
    )
  }
}

export { List }
