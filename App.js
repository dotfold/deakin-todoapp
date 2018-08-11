import { createStackNavigator } from 'react-navigation'

import { Home } from './app/home'
import { List } from './app/list'
import { ListNavigator } from './app/list_navigator'

// request current position on boot to trigger permissions request
navigator.geolocation.getCurrentPosition(s => {
  // noop
})

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
