import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthStackNavigator} from './AuthStackNavigator';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name="AuthStack" component={AuthStackNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
