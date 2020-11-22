import React from 'react';
import { View, StyleSheet } from 'react-native';

 function Separator(props){
     return(
        <View style={s.separator}/>
     );
 }

 const s = StyleSheet.create({
    separator:{
        flex:1,
        borderTopWidth:1,
        marginHorizontal:15,
        borderTopColor:"#eceff1",
    },
 });

 export default Separator;