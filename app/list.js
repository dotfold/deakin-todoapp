import React from 'react'
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'

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
  text: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 3,
    marginRight: 20
  }
})

const ListItems = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text style={styles.text}>Todo List will show here</Text>
    </View>
  )
}

const List = () => {
  return (
    <ScrollView>
      <ListItems />
    </ScrollView>
  )
}

export { List }
