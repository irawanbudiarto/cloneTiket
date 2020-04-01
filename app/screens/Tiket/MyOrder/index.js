import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Modal, Button } from 'react-native'
import { Common as CommonStyles } from '@styles'
import styles from './styles'

type Props = {}
export default class MyOrder extends Component<Props> {
        state = {  
            isVisible: false, //state of modal default false  
            }  
            render() {  
                return (  
                <View style={{flex: 1,  
                    alignItems: 'center',  
                    justifyContent: 'center',  
                    backgroundColor: '#ecf0f1', }}>  
                    <Modal            
                    animationType = {"fade"}  
                    transparent = {false}  
                    visible = {this.state.isVisible}  
                    onRequestClose = {() =>{ console.log("Modal has been closed.") } } 
                    style={{ ustifyContent: 'center',  
                    alignItems: 'center',   
                    backgroundColor : "#00BCD4",   
                    height: 300 ,  
                    width: '80%',  
                    borderRadius:10,  
                    borderWidth: 1,  
                    borderColor: '#fff',    
                    marginTop: 80,  
                    marginLeft: 40,   }}>  
                    {/*All views of Modal*/}  
                        <View style = {styles.modal}>  
                        <Text style = {styles.text} 
                        style={{ color: '#3f2949',  
                        marginTop: 10   }}>Modal is open!</Text>  
                        <Button title="Click To Close Modal" onPress = {() => {  
                            this.setState({ isVisible:!this.state.isVisible})}}/>  
                    </View>  
                    </Modal>  
                    {/*Button will change state to true and view will re-render*/}  
                    <Button   
                    title="Click To Open Modal"   
                    onPress = {() => {this.setState({ isVisible: true})}}  
                    />  
                </View>  
        )
    }
}
