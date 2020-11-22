import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';

 function BluetoothListLayout(props){
     return (
        <View style={s.container}>
            <Text style={s.title}>{props.title}</Text>
            {props.children}
        </View>
     )
 }

 const s = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:25,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
    },
 });

 export default BluetoothListLayout