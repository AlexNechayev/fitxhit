import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Copyrights from '../Components/copyright';
import MenuButton from '../Components/MenuButton'
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export function MenuScreen({navigation, route}) {
    const device = (route.params.device);
    const bluetooth = (route.params.BluetoothSerial);

  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.conteiner}>
        <View  style={{width:"100%", height:"20%", alignItems:"center", justifyContent:"center"}}>
            <Image
                style={{resizeMode:"contain", width:"90%", height:"50%"}}
                source={require('../../assets/addons/mmmmm.png')}
            />
            <Image
                style={{resizeMode:"contain", width:"90%", height:"50%"}}
                source={require('../../assets/addons/whatDoIWant.png')}
            />
            {/* <Text>{device.id}</Text> */}
        </View>

        <View
            style={styles.main}
        >
            <MenuButton
                buttonStyle={styles.buttonConteiner}
                imageStyle={styles.oneWordButton}
                onPress={()=>navigation.navigate("EmotionsScreen",device)}
                source={require('../../assets/addons/emotions.png')}
            />
            <MenuButton
                buttonStyle={styles.buttonConteiner}
                imageStyle={styles.twoWordButton}
                onPress={()=>navigation.navigate("ControlScreen",{device,bluetooth})}
                source={require('../../assets/addons/manualControl.png')}
            />
            <MenuButton
                buttonStyle={styles.buttonConteiner}
                imageStyle={styles.twoWordButton}
                onPress={()=>navigation.navigate("VControlScreen",{device,bluetooth})}
                source={require('../../assets/addons/voiceControl.png')}
            />
            <View style={styles.infoConteiner}>
                <Text style={styles.txtInfo}>About the App:</Text>
                <Text style={styles.txtInfo}>With the application you can control your clothing as you wish and express your feelings through it.</Text>
            </View>
        </View>
    
        <Copyrights/>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:30,
        paddingBottom:15,
    },
    main:{
        justifyContent:'space-evenly',
        alignItems:'center',
        width:"100%",
        height:"80%",
    },
    buttonConteiner:{
        margin:10,
        width:"90%",
        height:"10%",
        alignItems:"center",
        justifyContent:"center",
    },
    oneWordButton:{
        resizeMode:"contain",
        width:"52%"
    },
    twoWordButton:{
        resizeMode:"contain",
        width:"80%"
    },
    imageStyleBig:{
        resizeMode:"center",
        width:"100%"
    },
    infoConteiner:{
        backgroundColor:"#fffFFf90",
        marginTop:35,
        width:"90%",
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:20,
    },
    title:{
        fontSize:35,
        fontWeight:"bold",
    },
    txtInfo:{
        fontFamily:'Cambria',
        fontSize:22,  
    },
});
