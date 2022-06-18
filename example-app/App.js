import * as React from 'react';
import Constants from 'expo-constants';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
const Stack =createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown: false}}>
   <Stack.Screen name = "WelcomeScreen" component={Welcome} />
   <Stack.Screen name = "MemberSignScreen" component={MemberSign}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}
