import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { NavigationActions } from 'utils'
import { Styles } from 'utils/Appearance'
import { Common as CommonStyles } from '@styles'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {}
export default class SignIn extends React.Component<Props> {
  render() {
    const navigation = this.props.navigation

    return (
    <View style={{flex: 1,}}>
        <View style={{ flex: 1, backgroundColor:'#F6F7FB'}}>
            {/* Navbar */}
            <View style={{ height:57, backgroundColor:'#2881E3', flexDirection:'row' }}>
            </View>
            {/* Welcome to My Apps */}
            <View>
                <Text style={{ paddingLeft:160, fontSize:18, paddingBottom:10, paddingTop:10 }}>My Apps</Text>
            </View>
              {/* Menu My Apps */}
            <View style={{ flexDirection:'row', flexWrap:'wrap', marginHorizontal:16, paddingTop:10 }}>
                <View style={{ justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:15, shadowOpacity: 0.8}}>
                    <TouchableHighlight onPress={() => { 
                        navigation.dispatch(NavigationActions.goToReset('Main')) 
                    }} underlayColor={'transparent'}>
                        <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                        <View>
                            <Image source={require('assets/images/logoitapps.png')} style={{ width:58, height:58}}/>
                            </View>
                            <Text >Sign In</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        navigation.dispatch(NavigationActions.goToNested(['SignUp']))
                       }} underlayColor={'transparent'}>    
                        <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                            <View>
                                <Image source={require('assets/images/logoitapps.png')} style={{ width:58, height:58}}/>
                            </View>
                            <Text>Sign Up</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                         navigation.dispatch(NavigationActions.goToNested(['Other', 'Info']))
                      }} underlayColor={'transparent'}>
                        <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                            <View>
                                <Image source={require('assets/images/logoitapps.png')} style={{ width:58, height:58}}/>
                            </View>
                            <Text>Info</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={{ justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:15 }}>
                <TouchableHighlight onPress={() => {
                         navigation.dispatch(NavigationActions.goToNested(['Other', 'Tiket']))
                      }} underlayColor={'transparent'}>
                      <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                          <View>
                              <Image source={require('assets/images/logoitapps.png')} style={{ width:58, height:58}}/>
                          </View>
                          <Text>Tiket.com</Text>
                      </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                        navigation.dispatch(NavigationActions.goToNested(['SignUp']))
                       }} underlayColor={'transparent'}>
                      <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                          <View>
                              <Image source={require('assets/images/logoitapps.png')} style={{ width:58, height:58}}/>
                          </View>
                          <Text>NextApp</Text>
                      </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                        navigation.dispatch(NavigationActions.goToNested(['SignUp']))
                       }} underlayColor={'transparent'}>
                      <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                          <View>
                              <Image source={require('assets/images/logoitapps.png')} style={{ width:58, height:58}}/>
                          </View>
                         <Text>NextApp</Text>
                      </View>
                </TouchableHighlight>
                </View>
            </View>

              {/* Next Content */}
            <View></View>
              {/* Next Content */}
            <View></View>
        </View>

          {/* Navigation Bottom */}
        <View style={{ height:57, backgroundColor:'#0064D3', flexDirection:'row' }}>
        
        </View>
    </View>
    )
  }
}
