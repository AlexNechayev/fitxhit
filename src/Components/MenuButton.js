import React from 'react';
import { 
    TouchableOpacity,
    Image
 } from 'react-native';


 export function MenuButton(props){
    return(
       <TouchableOpacity
            style={props.buttonStyle}
            onPress={props.onPress}
            >
            <Image
                style={props.imageStyle}
                source={props.source}
            />
        </TouchableOpacity> 
    )
 }
 export default MenuButton
 