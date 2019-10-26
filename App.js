import React from 'react'


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Screens
import RestaurantList from './src/components/RestaurantList'
import RestaurantInfo from './src/components/RestaurantInfo'
import AboutScreen from './src/components/About'
import AddReview from './src/components/AddReview'

import Icon from 'react-native-vector-icons/FontAwesome'

const RootStack = createStackNavigator({
  Home: {
    screen: RestaurantList,
  },
  Info: {
    screen: RestaurantInfo,
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066cc',
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    }
  }
})

const Tabs = createBottomTabNavigator({
  List: { screen: RootStack },
  About: { screen: AboutScreen },
}, {
  defaultNavigationOptions: ({navigation}) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        const {routeName} = navigation.state
        const name = {
          'List': 'list',
          'About': 'info-circle'
        }[routeName]
        return <Icon name={name} color={tintColor} size={22} />
      },
      tabBarOptions: {
        activeBackgroundColor: '#e5F0FA'
      }
    }
  }
})

const TopStack = createStackNavigator({
  Tabs: { screen: Tabs },
  AddReview: { screen: AddReview }
}, {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gesturesEnabled: false,
  }
})

const AppContainer = createAppContainer(TopStack)

export default AppContainer





