import React from 'react';
import { 
    View,
    Image,
    StyleSheet,
 } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

 function PlayButton(props){
     return(
        <View style={props.style}>
            <TouchableOpacity
            onPress={props.onPressPlay}
            >
                <Image
                    style={s.btn}
                    source={require('../../../assets/addons/play.png')}>
                </Image>
            </TouchableOpacity>
        </View>
     );
 }

 const s = StyleSheet.create({
    btn:{
        resizeMode:"center", 
        width:250,
        height:100,
    },
 });

 export default PlayButton