import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import { List } from './list'

const commonNavigationOptions = ({ navigation }) => ({
  header: null,
  title: navigation.state.routeName
})

const routeOptions = {
  screen: List,
  navigationOptions: commonNavigationOptions
}

const ListNavigator = createBottomTabNavigator(
  {
    all: routeOptions,
    incomplete: routeOptions,
    complete: routeOptions
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'all':
            iconName = 'ios-list'
            break
          case 'incomplete':
            iconName = 'ios-albums-outline'
            break
          case 'complete':
            iconName = 'ios-checkbox-outline'
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? 'blue' : 'gray'}
          />
        )
      }
    }),
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
  }
)

export { ListNavigator }
