import { AsyncStorage } from 'react-native'

const persist = async (data, key) => {
  try {
    const raw = JSON.stringify(data)
    const r = AsyncStorage.setItem(key, raw)
  } catch (error) {
    console.log(`error persisting ${key} with ${data}`, error.message)
  }
}

const retrieve = async key => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.log(`error retrieving data for ${key}`, error.message)
  }
}

export { persist, retrieve }
