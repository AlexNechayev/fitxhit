import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

 function Empty(props){
    return(
        <View>
            <Text style={s.tect}>{props.text}</Text>
        </View>
    )
 }

 const s = StyleSheet.create({
    text:{
        fontSize:20,
    }
 });
 export default Empty