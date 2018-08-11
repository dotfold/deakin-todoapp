import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { generateId } from './hash'

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
})

export class CreateItem extends React.Component {
  state = {
    newItemText: ''
  }

  addItem = () => {
    const { onAddItem } = this.props
    const { newItemText } = this.state

    this.setState(prev => ({
      newItemText: ''
    }))

    navigator.geolocation.getCurrentPosition(location => {
      const newItem = {
        id: generateId(),
        text: newItemText,
        completed: false,
        location
      }

      onAddItem(newItem)
    })
  }

  storeNewItemText = text => {
    this.setState(prev => ({ ...prev, newItemText: text }))
  }

  render () {
    const { newItem } = this.state

    return (
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder='Add something!'
        returnKeyType='done'
        onChangeText={this.storeNewItemText}
        onSubmitEditing={() => this.addItem()}
        value={newItem}
      />
    )
  }
}
