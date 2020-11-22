import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

function Controller(props){
    return(
    <View style={s.container}>
        <TouchableOpacity
            onPress={props.onPressPlus}
        >
            <Image
                style={s.btn}
                source={require('../../../assets/addons/plus.png')}>
            </Image>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={props.onPressMinuse}
        >
            <Image
                style={s.btn}
                source={require('../../../assets/addons/minues.png')}>
            </Image>
        </TouchableOpacity>
    </View>
    );
}

 const s = StyleSheet.create({
    container:{
        width:'60%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        padding:10,
        borderRadius:90,
        borderColor:'black',
        borderWidth:5,
    },
    btn:{
        resizeMode:"contain", 
        margin:5,
        width:45,
        height:45,
    },
 });

 export default Controller