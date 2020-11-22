import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

 function Subtitle(props){
     return(
        <View style={s.container}>
             <Text style={s.title}>{props.title}</Text>
             <View style={s.line}/>
        </View>
     );
 }

 const s = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:15,
    },
    title:{
        marginLeft:10,
        fontSize:18,
        fontWeight:"bold",
        color:"gray",
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:"#eceff1",
        width:50,
        flex:1,
        marginTop:3,
        marginLeft:5,
    },
 });

 export default Subtitle;