import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight, Button, Image, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {
}
class Tiket extends React.Component<Props> {
    state = {
    }


    static navigationOptions = ({ navigation }) => {
        return {
        headerMode: 'screen',
        headerLeft: () => {
            return (
            <TouchableHighlight underlayColor={'transparent'} style={{ marginLeft: 25, flex: 1, flexDirection: 'row' }} 
            onPress={() => navigation.dispatch(NavigationActions.back())}>
                <FontAwesome5 style={{ fontSize: 24 }} name={'arrow-left'} />
            </TouchableHighlight>
            )
        }
        }
    }

    render() {
        const navigation = this.props.navigation

        return (
            <View style={{flex: 1,}}>
                <View style={{ flex: 1, backgroundColor:'#F6F7FB'}}>
                    {/* Navbar */}
                    <View style={{ height:57, backgroundColor:'#0064D3', flexDirection:'row' }}>
                        <View style={{ flex: 1, justifyContent:'center', width:98, height:25, marginTop:16, marginLeft:10 }}>
                            <Image source={require('assets/images/tiket.png')} style={{ width:95, height:22,}}/>
                        </View>
                        <View style={{ flex:1/4, alignItems:'center', justifyContent:'center' }}>
                            <Text style={{ backgroundColor:'#0064D3', color:'#fff' }}>MASUK</Text>
                        </View>
                    </View>
                    <ScrollView>     
                    {/* Hero Image Promo */}
                    <View>
                        <Image source={require('assets/images/heroImage.jpg')} style={{ width:396, height:235, marginBottom:15}}/>
                    </View>
                    {/* Hei Kamu Mau Kemana? */}
                    <View>
                        <View>
                            <Text style={{ fontWeight:'bold', fontSize: 18, marginBottom:10, marginHorizontal:16, color:'#35415B' }}>Hey Kamu, mau ke mana?</Text>
                        </View>
                    </View>
                    {/* Menu Tiket.com */}
                    <View style={{ flexDirection:'row', flexWrap:'wrap', marginHorizontal:16 }}>
                        <View style={{ justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:15, shadowOpacity: 0.8}}>
                            <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                                <View>
                                    <Image source={require('assets/images/Pesawat.png')} style={{ width:58, height:58}}/>
                                </View>
                                <Text >Pesawat</Text>
                            </View>
                            <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                                <View>
                                    <Image source={require('assets/images/Hotel.png')} style={{ width:58, height:58}}/>
                                </View>
                                <Text>Hotel</Text>
                            </View>
                            <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                                <View>
                                    <Image source={require('assets/images/keretaApi.png')} style={{ width:58, height:58}}/>
                                </View>
                                <Text>Kereta Api</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:15 }}>
                            <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                                <View>
                                    <Image source={require('assets/images/sewaMobil.png')} style={{ width:58, height:58}}/>
                                </View>
                                <Text>Sewa Mobil</Text>
                            </View>
                            <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                                <View>
                                    <Image source={require('assets/images/Atraksi.png')} style={{ width:58, height:58}}/>
                                </View>
                                <Text>Atraksi</Text>
                            </View>
                            <View style={{ width: 109, height: 109, borderWidth: 1, borderColor:'#efefef', borderRadius:10, alignItems:'center', justifyContent:'center',  backgroundColor:'#fff'   }}>
                                <View>
                                    <Image source={require('assets/images/Event.png')} style={{ width:58, height:58}}/>
                                </View>
                                <Text>Event</Text>
                            </View>
                        </View>
                    </View>
                    {/* Next Content 1 */}
                    <View style={{ paddingTop:15 }}>
                        <View>
                            <Text style={{ fontWeight:'bold', fontSize: 18, marginBottom:10, marginHorizontal:16, color:'#35415B' }}>
                                Info Terkait Pandemi Virus Corona
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, marginBottom:10, marginHorizontal:16, color:'#5A637A' }}>
                                Jaga Kesehatanmu, ini pasti berlalu. Cek info terkait reschedule dan refund disini!
                            </Text>
                        </View>
                    </View>
                    {/* Next Content */}
                    <View style={{ marginBottom: 20, paddingTop:10, paddingBottom:20 }}>
                        <View>
                        <Image source={require('assets/images/infocorona1.png')} style={{ width:345, height:168, borderRadius:8, marginHorizontal:16 }}/>
                        </View>
                        <View>
                            <View>
                            <Text style={{ fontWeight:'bold', fontSize: 16, marginBottom:10, marginHorizontal:16, color:'#35415B', paddingTop:5 }}>
                                Karantina Wilayah & Kebijakan Penerbangan
                            </Text>
                            </View>
                            <View>
                            <Text style={{ fontSize: 14, marginBottom:10, marginHorizontal:16, color:'#5A637A' }}>
                                Cek daftar negara yang sudah melakukan karantina wilayah
                                </Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>

                {/* Navigation Bottom */}
                <View style={{ height:57, backgroundColor:'#fff', flexDirection:'row' }}>
                    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                        <View style={{ width: 26, height: 26, backgroundColor:'white' }}>
                            <Image source={require('assets/images/icon/iconHome.png')} style={{ width:26, height:26, marginTop:4 }}/>
                        </View>
                        <Text style={{ fontSize: 12, color:'#0663CA', marginTop:5 }}>Home</Text>
                    </View>
                    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                        <View style={{ width: 26, height: 26, backgroundColor:'white' }}>
                            <Image source={require('assets/images/icon/iconMyOrder.png')} style={{ width:26, height:26, marginTop:4 }}/>
                        </View>
                        <Text style={{ fontSize: 12, color:'#8C93A6', marginTop:5 }}>My Order</Text>
                    </View>
                    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                        <View style={{ width: 26, height: 26, backgroundColor:'white' }}>
                            <Image source={require('assets/images/icon/iconTixPoint.png')} style={{ width:26, height:26, marginTop:4 }}/>
                        </View>
                        <Text style={{ fontSize: 12, color:'#8C93A6', marginTop:5 }}>Tix Point</Text>
                    </View>
                    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                        <View style={{ width: 26, height: 26, backgroundColor:'white' }}>
                            <Image source={require('assets/images/icon/iconProfile.png')} style={{ width:26, height:26, marginTop:4 }}/>
                        </View>
                        <Text style={{ fontSize: 12, color:'#8C93A6', marginTop:5 }}>Akun</Text>
                    </View>
                </View>
            </View>
        )
    } 
}

export default connect((store)=>{
    return {
        nav: store.navData
    }
})(Tiket)
