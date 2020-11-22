import React from 'react';
import { View,Image,StyleSheet,Button,} from 'react-native';
import Modal from 'react-native-modal';
import MenuButton from './MenuButton';

 function PopUpWindow(props){
     return(
        <Modal isVisible={props.isVisible}>
        <View style={s.screen}>
            <Image source={props.source} style={s.imageStyle}></Image>
            <View style={s.buttonConteiner}>
                <MenuButton
                    onPress={props.onPressApply}
                    imageStyle={s.appleButtonStyle}
                    buttonStyle={s.buttonStyleApply}
                    source={require('../../assets/addons/apply.png')}
                />
                <MenuButton
                    onPress={props.onPressBack}
                    imageStyle={s.backButtonStyle}
                    buttonStyle={s.buttonStyleBack}
                    source={require('../../assets/addons/back.png')}
                />
            </View>
        </View>
      </Modal>
     );
 }

 const s = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:45,
        color:'white',
    },
    buttonConteiner:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    buttonStyleApply:{
        backgroundColor:"#ffffff90",
        borderRadius:30,
        paddingHorizontal:30,
        margin:10,
    },
    buttonStyleBack:{
        backgroundColor:"#ffffff90",
        borderRadius:30,
        paddingHorizontal:50,
        margin:10,
    },
    appleButtonStyle:{
        resizeMode:"contain",
        width:100,
    },
    backButtonStyle:{
        resizeMode:"contain",
        width:78,
    },
    imageStyle:{
        resizeMode:"contain",
        height:"80%",
        width:"80%",
    },
 });

 export default PopUpWindow