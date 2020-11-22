import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground } from 'react-native';
import Controller from '../Components/Controllers/Controller'
import Copyrights from '../Components/copyright';

export class ControlScreen extends Component {
    constructor(props){
        super(props)
        const device = (props.route.params.device)
        const bluetooth = (props.route.params.bluetooth)

        const $assets_image_0 = require('../../assets/addons/manualControl.png')
        const $assets_image_1 = require('../../assets/addons/left.png')
        const $assets_image_2 = require('../../assets/addons/right.png')


        this.state={
          id:device.id,
          name:device.name,
          address:device.address,
          bluetooth:bluetooth,
          images:{
              manualControl:$assets_image_0,
              left:$assets_image_1,
              right:$assets_image_2,
          }
        }
    }

    commendWrite(letter){
        this.state.bluetooth.write(letter)
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device')
          this.setState({ connected: true })
        })
        .catch((err) => console.log(err.message))
      }

    render(){
        return (
            <ImageBackground source={require('../../assets/background/background.png')} style={styles.conteiner}>
        
                <Image
                    style={styles.imageTitleStyle}
                    source={this.state.images.manualControl}>
                </Image>
        
                <View style={styles.main}>
                    <Image
                        style={styles.imageStyle}
                        source={this.state.images.left}
                    ></Image>   
                    <Controller
                        onPressPlus={()=>{this.commendWrite("L"),this.commendWrite("\n")}}
                        onPressMinuse={()=>{this.commendWrite("B"),this.commendWrite("\n")}}    
                    />
                    <Image
                        style={styles.imageStyle}
                        source={this.state.images.right}
                    ></Image>   
                    <Controller
                        onPressPlus={()=>{this.commendWrite("R"),this.commendWrite("\n")}}
                        onPressMinuse={()=>{this.commendWrite("D"),this.commendWrite("\n")}}
                    />
                </View>
                <Copyrights/>  
            </ImageBackground>
          );
        }  
    }

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
    },
    main:{
        width:"80%",
        height:"80%",
        marginVertical:10,
        justifyContent:'center',
        alignItems:"center",
    },
    imageTitleStyle:{
        resizeMode:"contain",
        width:"95%",
    },
    imageStyle:{
        resizeMode:'contain',
        width:110
    },
    buttonText:{
        fontSize:45,
    }
});