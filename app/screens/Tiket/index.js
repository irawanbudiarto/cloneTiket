import React from 'react'
import { connect } from 'react-redux'
import { Text, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { SideBarMenu } from '@components'
import { Appearance, Application } from '@utils'
import Styles from '@styles'
import SideMenu from 'react-native-side-menu'
const { Common, MainTabNavigator } = Styles
const initialRouteName = 'Home'

// Tabs
import HomeScreen from '@screens/Tiket/Home'
import MyOrderScreen from '@screens/Tiket/MyOrder'
import TixPointScreen from '@screens/Tiket/TixPoint'
import AkunScreen from '@screens/Tiket/Akun'
import AccountScreen from '@screens/Tiket/Account'
import MessagesScreen from '@screens/Tiket/Messages'
import NotificationsScreen from '@screens/Tiket/Notifications'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {
  navigation: PropTypes.object.isRequired
}
class Main extends React.Component {
  state = {
    isOpen: false
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState({ isOpen: false })
  }

  handleMenu() {
    this.setState({ isOpen: false || true })
  }

  componentDidMount() {
    Application.on('toogleMenu', () => {
      this.setState({ isOpen: false || true })
    })
  }

  render() {
    const { navigation, dispatch } = this.props
    const { isOpen } = this.state
    const menu = <SideBarMenu />

    return (
      <SideMenu menu={menu} isOpen={isOpen}>
        <MainTab navigation={navigation}/>
      </SideMenu>
    )
  }
}

const MainTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({tabBarLabel: "Home",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (focused == true) {
          return <Image source={require('assets/images/icon/homeaktif.png')} style={{ width:30, height:30 }}/>
        } else {
          return <Image source={require('assets/images/icon/homenonaktif.png')} style={{ width:30, height:30 }}/>
        }
        
      },
    })
  },
  MyOrder: {
    screen: MyOrderScreen,
    navigationOptions: ({ navigation }) => ({tabBarLabel: "My Order",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (focused == true) {
          return <Image source={require('assets/images/icon/orderaktif.png')} style={{ width:30, height:30 }}/>
        } else {
          return <Image source={require('assets/images/icon/ordernonaktif.png')} style={{ width:30, height:30 }}/>
        }
        
      },
    })
  },
  TixPoint: {
    screen: TixPointScreen,
    navigationOptions: ({ navigation }) => ({tabBarLabel: "TIX Point",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (focused == true) {
          return <Image source={require('assets/images/icon/pointaktif.png')} style={{ width:30, height:30 }}/>
        } else {
          return <Image source={require('assets/images/icon/tixnonaktif.png')} style={{ width:30, height:30 }}/>
        }
        
      },
    })
  },
  Akun: {
    screen: AkunScreen,
    navigationOptions: ({ navigation }) => ({tabBarLabel: "Akun",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (focused == true) {
          return <Image source={require('assets/images/icon/akunaktif.png')} style={{ width:30, height:30 }}/>
        } else {
          return <Image source={require('assets/images/icon/akunnonaktif.png')} style={{ width:30, height:30 }}/>
        }
        
      },
    })
  },








  // Messages: {
  //   screen: MessagesScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state
  //       if (focused == true) {
  //         return <Image source={require('assets/images/icon/orderaktif.png')} style={{ width:30, height:30 }}/>
  //       } else {
  //         return <Image source={require('assets/images/icon/ordernonaktif.png')} style={{ width:30, height:30 }}/>
  //       }
        
  //     },
  //   })
  // },
  // Notifications: {
  //   screen: NotificationsScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state
  //       if (focused == true) {
  //         return <Image source={require('assets/images/icon/pointaktif.png')} style={{ width:30, height:30 }}/>
  //       } else {
  //         return <Image source={require('assets/images/icon/tixnonaktif.png')} style={{ width:30, height:30 }}/>
  //       }
        
  //     },
  //   })
  // },
  // Account: {
  //   screen: AccountScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state
  //       if (focused == true) {
  //         return <Image source={require('assets/images/icon/akunaktif.png')} style={{ width:30, height:30 }}/>
  //       } else {
  //         return <Image source={require('assets/images/icon/akunnonaktif.png')} style={{ width:30, height:30 }}/>
  //       }
        
  //     },
  //   })
  // }
}, {
  tabBarOptions: {
    //tomato
    activeTintColor: '#0064D3',
    inactiveTintColor: 'gray',
    style: {
      height: 60,
      paddingBottom:4
    }
  },
  swipeEnabled: false,
  lazy: true,
  animationEnabled: false
})

Main.router = MainTab.router

export default connect((store)=>{
  return {
  }
})(Main)
