import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { useState } from 'react';
import * as React from 'react';
import {View, Text, ScrollView, TextInput, Alert, Button, Platform} from 'react-native';
import {styles} from '../apptest/src/themes/dark';
import Logo from './src/components/Logo';
import CalculatorScreen from './src/screens/CalculatorScreen';
import LoginScreen from './src/screens/LoginScreen'; 
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';
import SplashScreen from 'react-native-splash-screen';

// type RootStackParamList = {
//   Login: undefined,
//   Home: { title: String};
// };

const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator<RootStackParamList>();
// type Props = {
//   navigation = createNativeStackNavigator<RootStackParamList>();
// };



const App = () => {

  React.useEffect(() => {
    if(Platform.OS === 'android') SplashScreen.hide();
  }, [])
    return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>      
          <Stack.Screen name="Login" component={LoginScreen}/>          
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>          
        </Stack.Navigator>
      </NavigationContainer>
    );
  
};

export default App;