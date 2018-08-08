import React from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'

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
  marginVertical: 20
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width - 50,
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
  }
})

const Item = ({ item, onToggleComplete }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onToggleComplete(item)}>
      <View style={item.completed ? styles.completedCircle : circle} />
    </TouchableOpacity>
    <Text style={item.completed ? styles.completedText : styles.text}>
      {item.text}
    </Text>
  </View>
)

export { Item }
