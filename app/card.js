import React from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(20, 100, 200, 0.7)',
    padding: 20,
    width: width - 25,
    height: 185,
    marginBottom: 35,
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 10
    }
  }
})

const Card = ({ onTouch = () => void 0, children }) => {
  return (
    <TouchableOpacity onPress={() => onTouch()}>
      <View style={styles.card}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export { Card }
