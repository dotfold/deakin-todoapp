import React from 'react'
import { Switch, View, StyleSheet, Text, TextInput } from 'react-native'
import { generateId } from './hash'

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderBottomColor: 'rgba(20, 20, 20, 0.04)',
    borderBottomWidth: 1,
    fontSize: 24
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: 'rgba(20, 20, 20, 0.4)',
    borderBottomWidth: 1
  }
})

export class CreateItem extends React.Component {
  state = {
    newItemText: '',
    showLocationToggle: false,
    recordLocation: true
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

  showLocationToggle = () => {
    this.setState(() => ({ showLocationToggle: true }))
  }

  hideLocationToggle = () => {
    this.setState(() => ({ showLocationToggle: false }))
  }

  toggleRecordLocation = newValue => {
    this.setState(() => ({ recordLocation: newValue }))
  }

  render () {
    const { newItemText, showLocationToggle, recordLocation } = this.state
    return (
      <View>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder='Add something!'
          returnKeyType='done'
          onChangeText={this.storeNewItemText}
          onFocus={this.showLocationToggle}
          onBlur={this.hideLocationToggle}
          onSubmitEditing={() => this.addItem()}
          value={newItemText}
        />
        {showLocationToggle &&
          <View style={styles.switchView}>
            <Text>Tag your current location?</Text>
            <Switch
              value={recordLocation}
              onValueChange={this.toggleRecordLocation}
            />
          </View>}
      </View>
    )
  }
}
