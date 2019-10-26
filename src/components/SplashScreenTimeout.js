import React, {Component} from 'react'

import {View, Text} from 'react-native'

import SplashScreen from 'react-native-splash-screen'

const TIMEOUT = 2000

export default class SplashScreenTimeout extends Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      //SplashScreen.hide()
    }, TIMEOUT)
    this.props.navigation.navigate('Tabs')
  }
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Splash</Text>
      </View>
    )
  }
}
