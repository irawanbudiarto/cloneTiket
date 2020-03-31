import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Stack
import SignInScreen from '@screens/SignIn'
import SignUpScreen from '@screens/SignUp'
import InfoScreen from '@screens/Info'
import TiketScreen from '@screens/Tiket'
import WalkthroughScreen from '@screens/Walkthrough'

// Drawer
import MainScreen from '@screens/Main'

const Other = createStackNavigator({
  SignUp: {
    screen: SignUpScreen
  },
  Info: {
    screen: InfoScreen
  },
  Tiket: {
    screen: TiketScreen
  }
}, {
  headerMode: 'none',
})

const routes = createStackNavigator({
  Walkthrough: {
    screen: WalkthroughScreen
  },
  SignIn: {
    screen: SignInScreen
  },
  Main: {
    screen: MainScreen,
  },
  Other: {
    screen: Other
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Walkthrough'
})

export default routes
