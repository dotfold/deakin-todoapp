import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccc',
    padding: 20,
    // flex: 1,
    width: width - 25,
    height: 185,
    borderRadius: 10,
    shadowColor: '#ff7',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 10
    }
  }
})

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export { Card }
