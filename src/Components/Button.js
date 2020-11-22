import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function Button({title, style, onPress}){
    return <TouchableOpacity style={[style, styles.conteiner]} onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:"#ffffff90",
        borderColor:"black",
        borderWidth:1,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:8,
        padding:15,
        margin:5,
        width:"49%",
    },

    text:{
        fontWeight:"500",
        fontSize:22,
    }
});