import React from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const circle = {
  width: 22,
  height: 22,
  borderRadius: 15,
  borderColor: 'gray',
  borderWidth: 2,
  marginRight: 20
}

const text = {
  fontWeight: '500',
  fontSize: 18,
  marginVertical: 20,
  flex: 1,
  width: '100%'
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  text,
  completedText: {
    ...text,
    textDecorationLine: 'line-through',
    opacity: 0.7
  },
  circle,
  completedCircle: {
    ...circle,
    borderColor: 'green',
    backgroundColor: 'green'
  },
  trash: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const Item = ({ item, onToggleComplete, onDeleteItem }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onToggleComplete(item)}>
      <View style={item.completed ? styles.completedCircle : circle} />
    </TouchableOpacity>
    <Text style={item.completed ? styles.completedText : styles.text}>
      {item.text}
    </Text>
    <TouchableOpacity onPress={() => onDeleteItem(item)}>
      <View style={styles.trash}>
        <Ionicons name='ios-trash-outline' size={28} color='gray' />
      </View>
    </TouchableOpacity>
  </View>
)

export { Item }
