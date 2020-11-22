import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {Input} from '../Components/Input';
import {Button} from '../Components/Button';
import {MenuButton} from '../Components/MenuButton';
import {Copyrights} from '../Components/copyright';

export function LoginScreen({navigation}) {
  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.conteiner}>

        <Image
          style={{resizeMode:"center", width:"90%",height:"15.6%"}}
          source={require('../../assets/addons/welcome.png')}
        />

        <View style={styles.main}>
          <Text style={styles.title}>Log in with your social account</Text>
          <View style={styles.socialConteinter}>
            <MenuButton
              buttonStyle={styles.socialButton}
              source={require('../../assets/icons/facebook.png')}
              onPress={()=>{alert("Hello there")}}
            />
            <MenuButton
              buttonStyle={styles.socialButton}
              source={require('../../assets/icons/google.png')}
              onPress={()=>{alert("Hello there")}}
            />
              <MenuButton
              buttonStyle={styles.socialButton}
              source={require('../../assets/icons/twitter.png')}
              onPress={()=>{alert("Hello there")}}
            />
          </View>

          <Text style={styles.title}>Have account here? Log in</Text> 

          <View style={styles.centerConteinter}>
            <Input style={styles.input} placeholder={"Username"}></Input>
            <Input style={styles.input} placeholder={"Password"} secureTextEntry></Input>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
                title={"login"}
                onPress={()=>{navigation.navigate('Devices')}}
            />
            <Button
              title={"sign in"}
              onPress={()=>{alert("sign in button pressed")}}
            />
          </View>
        </View>
      <Copyrights/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:170,
    
  },
  mainTitle:{
    fontSize:30,
    color:'black',
  },
  title:{
    fontSize:15,
    marginTop:25,
    color:'black',
  },
  main:{
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:"80%",
  },
  centerConteinter:{
    width:"100%",
    alignItems:"center",
    padding:10,
  },
  socialConteinter:{
    width:"90%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
  },
  socialButton:{
    backgroundColor:"#ffffff90",
    margin:3,
    padding:18,
    borderColor:"black",
    borderWidth:1,
    borderRadius:10,
    justifyContent:"center",
  },
  buttonsContainer:{
    padding:10,
    width:"90%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
});