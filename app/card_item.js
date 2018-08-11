import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'rgba(250, 250, 250, 0.95)',
    fontSize: 24
  }
})

const CardItem = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export { CardItem }
