import React from 'react'
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { CardItem } from './card_item'
import { Card } from './card'

// TODO: use React Context API and have a Dimensions provider
// that propagates new dimensions from a change event
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    height: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titlesView: {
    flex: 0,
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingBottom: 30,
    paddingTop: 20
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '300'
  },
  tagline: {
    fontSize: 20,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#ccc',
    padding: 20,
    flex: 1,
    width: width - 25,
    height: 185,
    borderRadius: 10
  },
  icon: {
    opacity: 0.2,
    position: 'absolute',
    right: 10,
    top: -10,
    maxHeight: 195
  }
})

class Home extends React.Component {
  static navigationOptions = { title: '', header: null }
  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.outer}>
          <View style={styles.titlesView}>
            <Text style={styles.title}>Hey there!</Text>
            <Text style={styles.tagline}>Looking for something to do?</Text>
          </View>
          <View style={styles.container}>
            <Card>
              <CardItem title='{x} items tagged at your current location' />
              <View style={styles.icon}>
                <Ionicons
                  name='ios-locate'
                  size={242}
                  color='rgba(255, 255, 255, 0.7)'
                />
              </View>
            </Card>
            <Card onTouch={() => navigation.navigate('List')}>
              <CardItem title='All your items' />
              <View style={styles.icon}>
                <Ionicons
                  name='ios-list'
                  size={242}
                  style={{ right: 55 }}
                  color='rgba(255, 255, 255, 0.7)'
                />
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export { Home }
