import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from './Screens/LoginScreen';
import {MenuScreen} from './Screens/MenuScreen';
import {EmotionsScreen} from './Screens/EmotionsScreen';
import {ControlScreen} from './Screens/ControlScreen';
import {VControlScreen} from './Screens/VControlScreen';
import {BluetoothList} from './Screens/BluetoothList';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false,}}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>
      <AuthStack.Screen name="MenuScreen" component={MenuScreen}/>
      <AuthStack.Screen name="EmotionsScreen" component={EmotionsScreen}/>
      <AuthStack.Screen name="ControlScreen" component={ControlScreen}/>
      <AuthStack.Screen name="VControlScreen" component={VControlScreen}/>
      <AuthStack.Screen name="Devices" component={BluetoothList}/>
  </AuthStack.Navigator>
  )
}

