import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import { CardItem } from './card_item'
import { Card } from './card'

// TODO: use React Context API and have a Dimensions provider
// that propagates new dimensions from a change event
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#ccc',
    padding: 20,
    // flex: 1,
    width: width - 25,
    height: 185,
    borderRadius: 10
  }
})

class Home extends React.Component {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home!</Text>
        <Card>
          <CardItem title='Things you can do now!' />
        </Card>
        <Card onTouch={() => navigation.navigate('List')}>
          <CardItem title='List items for home' />
        </Card>
      </View>
    )
  }
}

export { Home }
