import { Home } from './app/home'
import { List } from './app/list'
import { ListNavigator } from './app/list_navigator'

// load data from AsyncStorage

// then move to home
import { createStackNavigator } from 'react-navigation'

const App = createStackNavigator(
  {
    Home: { screen: Home },
    List: { screen: ListNavigator, navigationOptions: { title: 'Items' } }
  },
  {
    headerMode: 'float'
  }
)

export default App
