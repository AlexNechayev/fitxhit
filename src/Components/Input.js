import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export function Input({style, ...props}){
    return <TextInput {...props} style={[style, styles.input]} ></TextInput>;
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:"#ffffff90",
        width:"90%",
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        margin:3,
        padding:12,
    },
});