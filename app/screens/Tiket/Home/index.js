import React from 'react'
import { Dimensions, Image, Text, TouchableHighlight, TouchableOpacity, View, Button, Modal } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

type Props = {
}
class Home extends React.Component<Props> {
    state = {
        isVisible: false, 
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
                <Modal            
                animationType = {"fade"}  
                transparent = {true}  
                visible = {this.state.isVisible}>  
                {/*All views of Modal*/}  
                    <View style={{flex:1, backgroundColor:'#000000aa'}}>
                        <View style={{ backgroundColor:'#FCFCFC', marginHorizontal:18, flex:1, marginTop:75, 
                        marginBottom:75}}>  
                            <View>
                                <View style={{ backgroundColor:'#0064D3', height:57, justifyContent:'center', paddingLeft:10 }}>
                                    <View>
                                        <Text style={{ fontSize:16, color:'white' }}>Log in/Daftar</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor:'#FCFCFC', marginHorizontal:10, marginTop:15, marginBottom:20 }}>
                                    <Text>
                                    Gabung untuk menikmati pemesanan cepat, TIX Point, & promo ekslusif
                                    </Text>
                                </View>
                                <View style={{ marginHorizontal:10 }}>
                                    <View style={{ paddingLeft:10, borderWidth:1, borderColor:'#D8D9DE', borderRadius:5, marginBottom:15 }}>
                                        <TextInput placeholder="Nama Ponsel atau Email"/>
                                    </View>
                                    <TouchableOpacity>
                                    <View style={{ marginBottom:10, backgroundColor:'#FCDB00', alignItems:'center', paddingVertical:15, borderRadius:25 }}>
                                        <Text style={{ color:'#0064D3', fontWeight:'bold'}}>LANJUTKAN</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress = {() => {  
                            this.setState({ isVisible:!this.state.isVisible})}}>
                                    <View style={{ marginBottom:10, backgroundColor:'#D8D9DE', alignItems:'center', paddingVertical:15, borderRadius:25 }}>
                                        <Text style={{ color:'#FCFCFC', fontWeight:'bold'}}>BATALKAN</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginBottom:10, alignItems:'center'}}>
                                    <Text style={{color:'#D8D9DE'}}> ───  atau dengan  ───</Text>
                                </View>
                                <View style={{ padding: 10, marginHorizontal:10, borderWidth:1, borderColor:'#D8D9DE' }}>
                                    <TouchableOpacity>
                                    <View style={{ flexDirection:'row' }}>
                                        <View style={{ height:25, width:25 }}>
                                        <Image source={require('assets/images/gg.png')} style={{ width:25, height:25,}}/>
                                        </View>
                                        <Text style={{ color:'#5A637A', paddingLeft:10}}>Google</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <View>
                                    <Text style={{color:'#D8D9DE'}}> ──────────────────────────────</Text>
                                    </View>
                                    <TouchableOpacity>
                                    <View style={{ flexDirection:'row' }}>
                                        <View style={{ height:25, width:25 }}>
                                        <Image source={require('assets/images/fb1.png')} style={{ width:25, height:25,}}/>
                                        </View>
                                        <Text style={{ color:'#5A637A', paddingLeft:10}}>Facebook</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> 
                    </View>
                </Modal> 
                <View style={{ flex: 1, backgroundColor:'#F6F7FB'}}>
                    {/* Navbar */}
                    <View style={{ height:57, backgroundColor:'#0064D3', flexDirection:'row' }}>
                        <View style={{ flex: 1, justifyContent:'center', width:98, height:25, marginTop:16, marginLeft:10 }}>
                            <Image source={require('assets/images/tiket.png')} style={{ width:95, height:22,}}/>
                        </View>
                        <View style={{ flex:1/4, alignItems:'center', justifyContent:'center' }}>
                        
                            <TouchableOpacity onPress = {() => {this.setState({ isVisible: true})}}>
                                <Text style={{ color:'#fff' }}>MASUK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>     
                        {/* Hero Image Promo */}
                        <View>
                            <Image source={require('assets/images/heroImage.jpg')} style={{ height:260, width:'100%' }}/>
                        </View>
                        {/* Hei Kamu Mau Kemana? */}
                        <View>
                            <Text style={{ fontWeight:'bold', fontSize: 18, marginBottom:10, marginHorizontal:16, color:'#35415B' }}>Hey Kamu, mau ke mana?</Text>
                        </View>
                        {/* Menu Tiket.com */}
                        <View style={{ flexDirection:'row', flexWrap:'wrap', marginHorizontal:16 }}>
                            <View style={{ justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom: 15}}>
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
                        {/* Info Terkait Pandemi Corona */}
                        <ScrollView horizontal style={{ paddingTop:10, marginBottom:35, paddingLeft:16 }} showsHorizontalScrollIndicator={false}>
                            <View>
                                <View>
                                    <Image source={require('assets/images/infocorona1.png')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Karantina Wilayah & Kebijakan Penerbangan
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Cek daftar negara yang sudah melakukan karantina wilayah
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:16 }}>
                                <View>
                                    <Image source={require('assets/images/infocorona1.png')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Cara Refund Tiket Pesawat
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Nggak pake rumit kalau mau refund tiket pesawat di tiket.com!
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:16 }}>
                                <View>
                                    <Image source={require('assets/images/infocorona1.png')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Cara Reschedule Penerbangan
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Harus ganti jadwal penerbangan? Ih jangan panik. Caranya gampang!
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:16, paddingRight:16, marginRight:16 }}>
                                <View>
                                    <Image source={require('assets/images/infocorona1.png')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Refund Hotel via Aplikasi
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Simak cara refund hotel di aplikasi tiket.com karena mudah banget!
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                        </ScrollView>
                        {/* Next Content 3 */}
                        <View style={{ paddingHorizontal:16, marginBottom:20 }}>
                            <View style={{ justifyContent:'space-between', borderWidth:2, borderColor:'#D8D9DE', borderRadius:3}}>
                                <Text style={{ fontSize: 12, paddingLeft:5 , paddingVertical:12, paddingLeft:14, paddingRight:150, color:'#5A6276'}}>
                                    Masuk untuk dapatkan promo dan rekomendasi yang kamu banget
                                </Text>
                                <View style={{ backgroundColor:'blue', marginRight:14, justifyContent: 'center', position:'absolute', right:0, marginTop:7 }}>
                                <TouchableOpacity style={{ borderRadius:5}}>
                                    <Text style={{ backgroundColor:'#0064D3', justifyContent:'center', color:'white', padding: 10 }}>
                                        MASUK
                                    </Text>
                                </TouchableOpacity>    
                                </View>
                            </View>
                        </View>
                        {/* Penawaran Spesial */}
                        <View style={{ paddingTop:15, paddingLeft:3 }}>
                            <View>
                                <Text style={{ fontWeight:'bold', fontSize: 18, marginBottom:10, marginHorizontal:16, color:'#35415B' }}>
                                    Penawaran Spesial
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, marginHorizontal:16, color:'#5A637A' }}>
                                    Penawaran spesial khusus buat kamu
                                </Text>
                            </View>
                        </View>
                        <ScrollView horizontal style={{ paddingTop:10, marginBottom:35, paddingLeft:16 }} showsHorizontalScrollIndicator={false}>
                            <View>
                                <View>
                                    <Image source={require('assets/images/berita1.jpg')} style={{ width:249, height:205, borderRadius:10, borderWidth:0.8, borderColor:'#D8D9DE' }}/>
                                </View>
                            </View>
                            <View style={{ paddingLeft:16 }}>
                                <View>
                                    <Image source={require('assets/images/berita2.jpg')} style={{ width:249, height:205, borderRadius:10, borderWidth:0.8, borderColor:'#D8D9DE' }}/>
                                </View>
                            </View>
                            <View style={{ paddingLeft:16 }}>
                                <View>
                                    <Image source={require('assets/images/berita3.jpg')} style={{ width:249, height:205, borderRadius:10, borderWidth:0.8, borderColor:'#D8D9DE' }}/>
                                </View>
                            </View>
                            <View style={{ paddingLeft:16, paddingRight:16, marginRight:16 }}>
                                <View>
                                    <Image source={require('assets/images/berita4.jpg')} style={{ width:249, height:205, borderRadius:10, borderWidth:0.8, borderColor:'#D8D9DE' }}/>
                                </View>
                            </View>
                        </ScrollView>
                        {/* Posko Online Corona */}
                        <View style={{ paddingLeft:18 }}>
                            <Text style={{ fontWeight:'bold', color:'#35415A', fontSize:18  }}>Posko Online Corona</Text>
                        </View>
                        <View style={{ padding:10 }}>
                            <View style={{ width: Dimensions.get('window').width-20, height:177, flexDirection:'row' }}>
                                <View style={{ flex:1, padding:10 }}>
                                    <View style={{ flex:1, backgroundColor:'white', borderRadius:4 }}>
                                        <TouchableOpacity>
                                        <Image source={require('assets/images/Posko1.jpg')} style={{ width:'100%', height:'100%', borderRadius:4 }}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex:1, padding:10 }}>
                                    <View style={{ flex:1, backgroundColor:'white', borderRadius:4  }}>
                                        <TouchableOpacity>
                                        <Image source={require('assets/images/Posko2.jpg')} style={{ width:'100%', height:'100%', borderRadius:4  }}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: Dimensions.get('window').width-20, height:177, flexDirection:'row' }}>
                                <View style={{ flex:1, padding:10 }}> 
                                    <View style={{ flex:1, backgroundColor:'white', borderRadius:4  }}>
                                        <TouchableOpacity>
                                        <Image source={require('assets/images/Posko3.jpg')} style={{ width:'100%', height:'100%', borderRadius:4  }}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex:1, padding:10 }}>
                                    <View style={{ flex:1, backgroundColor:'white', borderRadius:4  }}>
                                        <TouchableOpacity>
                                        <Image source={require('assets/images/Posko4.jpg')} style={{ width:'100%', height:'100%', borderRadius:4  }}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Kamu Udah Tau Belum? */}
                        <View style={{ paddingTop:15, paddingLeft:3 }}>
                            <View>
                                <Text style={{ fontWeight:'bold', fontSize: 18, marginBottom:10, marginHorizontal:16, color:'#35415B' }}>
                                    Kamu Udah Tau Belum?
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, marginHorizontal:16, color:'#5A637A' }}>
                                    Info terbaru yang harus kamu tau!
                                </Text>
                            </View>
                        </View>
                        <ScrollView horizontal style={{ paddingTop:10, marginBottom:35, paddingLeft:16 }} showsHorizontalScrollIndicator={false}>
                            <View>
                                <View>
                                    <Image source={require('assets/images/news1.jpg')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Info Pembatalan dan Refund Tiket Kereta Api
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Simak jadwal kereta api yang dibatalkan dan refund 100%
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:16 }}>
                                <View>
                                    <Image source={require('assets/images/news2.jpg')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Refund Tiket Pesawat dan Hotel saat Malaysia Lockdown
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Info penting buat kamu yang sudah punya tiket ke Malaysia
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:16, paddingRight:16, marginRight:16 }}>
                                <View>
                                    <Image source={require('assets/images/news3.jpg')} style={{ width:248, height:118, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:248 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Peraturan Pemerintah Singapore untuk Pengunjung dari ASEAN
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Cek peraturan baru yang dibuat oleh pemerintah Singapore
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                        </ScrollView>
                        {/* Hotel */}
                        <View style={{ paddingLeft:3 }}>
                            <View>
                                <Text style={{ fontWeight:'bold', fontSize: 18, marginBottom:10, marginHorizontal:16, color:'#35415B' }}>
                                    Hotel Domestik dengan "Infinity Pool"
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, marginHorizontal:16, color:'#5A637A' }}>
                                    Rekomendasi hotel domestik dengan "infinity pool" yang mewah!
                                </Text>
                            </View>
                        </View>
                        <ScrollView horizontal style={{ paddingTop:10, marginBottom:35, paddingLeft:18 }} showsHorizontalScrollIndicator={false}>
                            <View>
                                <View>
                                    <Image source={require('assets/images/hotel1.jpg')} style={{ width:145, height:180, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:145 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Swiss-Bellresort Dago Heritage
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Hotel nyaman dengan view yang cantik
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:18 }}>
                                <View>
                                    <Image source={require('assets/images/hotel2.jpg')} style={{ width:145, height:180, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:145 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Oakwood Suites La Maison
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Hotel modern yang pas untuk q-time
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:18 }}>
                                <View>
                                    <Image source={require('assets/images/hotel3.jpg')} style={{ width:145, height:180, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:145 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Royal Tulip Gunung Geulis
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Hotel dengan desain & arsitektur mewah
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                            <View style={{ paddingLeft:18, paddingRight:18, marginRight:18 }}>
                                <View>
                                    <Image source={require('assets/images/hotel4.jpg')} style={{ width:145, height:180, borderRadius:5 }}/>
                                </View>
                                    <View style={{ width:145 }}>
                                        <View>
                                            <Text style={{ fontWeight:'bold', fontSize: 14, marginBottom:10, color:'#35415B', paddingTop:5 }}>
                                                Askhaya Hotel Karawang
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, marginBottom:10, color:'#5A637A' }}>
                                                Kolam renang memesona ada di sini
                                            </Text>
                                        </View>
                                    </View>
                            </View>
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>
        )
    } 
}

export default connect((store)=>{
    return {
        nav: store.navData
    }
})(Home)
