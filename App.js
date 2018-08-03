import { Home } from './app/home'
import { List } from './app/list'

// load data from AsyncStorage

// then move to home
import { createStackNavigator } from 'react-navigation'

const App = createStackNavigator({
  Home: { screen: Home },
  List: { screen: List }
})

export default App
