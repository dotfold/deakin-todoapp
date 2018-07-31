import React from 'react'
import { Text, View } from 'react-native'

const Item = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export { Item }
