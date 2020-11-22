import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
 import Separator from './Separator'

 function Device(props){
     return(
         <View>
           <TouchableOpacity style={s.warrper} onPress={props.onPress}>
            <View style={s.warrperLeft}>
                <Image style={s.iconLeft} source={props.iconLeft}/>
            </View>
            <View style={s.warrperName}>
                <Text style={s.name}>{props.name}</Text>
            </View>
            <Image style={s.iconRight} source={props.iconRight}/>
            </TouchableOpacity>
            <Separator/>  
         </View>
        
     );

 }

 const s = StyleSheet.create({
    warrper:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    warrperLeft:{
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:"center",
    },
    iconLeft:{
        width:50,
        height:50,
    },
    warrperName:{
        flex:1,
    },
    name:{
      fontSize:20,
      fontWeight:"bold",
      color:"gray",
    },
    iconRight:{
        width:35,
        height:35,
    },
 });

 export default Device;