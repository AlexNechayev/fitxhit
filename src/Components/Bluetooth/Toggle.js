import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

 function Toggle(props){
     return(
        <View style={s.container}>
            <Text style={s.text}>{props.value?"ON":"OFF"}</Text>
            <Switch
                style={s.switch}
                value={props.value}
                onValueChange={props.onValueChange}

            />
        </View>
     );
 }

 const s = StyleSheet.create({
    container:{
        paddingVertical:15,
        flexDirection:"row",
        alignItems:"center",
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        flex:1,
    },
    switch:{
        width:50,
    },
 });

 export default Toggle