import React from 'react';
import { Image } from 'react-native';

export function Copyrights(){
    return(
        <Image
            style={{resizeMode:"contain",width:"60%",}}
            source={require('../../assets/addons/copyrights.png')}
        />
    )
}
export default Copyrights