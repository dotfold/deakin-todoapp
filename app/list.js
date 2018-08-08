import React from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import { Item } from './item'

const itemIds = [1, 2, 3]
const mockItems = {
  1: {
    id: 1,
    text: 'persist the items',
    completed: false
  },
  2: {
    id: 2,
    text: 'add an item to the list',
    completed: false
  },
  3: {
    id: 3,
    text: 'load and display the items',
    completed: true
  }
}

class List extends React.Component {
  static navigationOptions = {
    title: 'Home Items',
  };

  state = {
    itemIds: itemIds,
    items: mockItems,
    newItem: ''
  }

  getNextKey = () => {
    return itemIds.length + 1
  }

  toggleItemStatus = item => {
    item.completed ? this.uncompleteItem(item) : this.completeItem(item)
  }

  completeItem = item => {
    this.setState(prev => ({
      ...prev,
      items: {
        ...mockItems,
        [item.id]: {
          ...item,
          completed: true
        }
      }
    }))
  }

  uncompleteItem = item => {
    this.setState(prev => ({
      ...prev,
      items: {
        ...mockItems,
        [item.id]: {
          ...item,
          completed: false
        }
      }
    }))
  }

  addItem = event => {
    const { newItem } = this.state
    const nextId = this.getNextKey()
    this.setState(prev => ({
      ...prev,
      newItem: '',
      itemIds: prev.itemIds.concat(nextId),
      items: {
        ...prev.items,
        [nextId]: {
          id: nextId,
          text: newItem,
          completed: false
        }
      }
    }))
  }

  storeNewItemText = text => {
    console.log('store item text', text)
    this.setState(prev => ({ ...prev, newItem: text }))
  }

  render () {
    const { itemIds, items, newItem } = this.state
    return (
      <ScrollView>
        <TextInput
          autoCorrect={false}
          placeholder='Add something!'
          returnKeyType='done'
          onChangeText={this.storeNewItemText}
          onSubmitEditing={() => this.addItem()}
          value={newItem}
        />
        {itemIds.map((id, index) => (
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
