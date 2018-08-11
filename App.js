import { createStackNavigator } from 'react-navigation'

import { Home } from './app/home'
import { List } from './app/list'
import { ListNavigator } from './app/list_navigator'

// request current position on boot to trigger permissions request
navigator.geolocation.getCurrentPosition(s => {
  // noop
})

const TAB_SCREEN_TITLES = [
  'All Items',
  'Incomplete Items',
  'Completed Items',
  'Items Tagged Here'
]

const App = createStackNavigator(
  {
    Home: { screen: Home },
    List: {
      screen: ListNavigator,
      navigationOptions: ({ navigation }) => ({
        title: TAB_SCREEN_TITLES[navigation.state.index]
      })
    }
  },
  {
    headerMode: 'float'
  }
)

export default App
