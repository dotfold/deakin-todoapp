import React from 'react'
import { Text, View } from 'react-native'

const CardItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export { CardItem }
