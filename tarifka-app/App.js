import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Categories from './pages/Categories';
import Detail from "./pages/Detail";
import FoodList from "./pages/FoodList";
import Welcome from "./pages/Welcome"


// or any pure javascript modules available in npm
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='WelcomePage' component={Welcome} options={{headerShown:false,}} />
        <Stack.Screen name='CategoryPage' component={Categories} options={{
            title: 'Categories',
            headerStyle:{backgroundColor:"#FE9B4B"},
            headerTitleStyle:{color:"#fff"},
            headerTintColor:"#fff",
            headerTitleAlign:"center"
          }}  />
        <Stack.Screen name='FoodListPage' component={FoodList} options={{
            title: 'Meals',
            headerStyle:{backgroundColor:"#FE9B4B"},
            headerTitleStyle:{color:"#fff"},
            headerTintColor:"#fff",
            headerTitleAlign:"center"
          }}  />
        <Stack.Screen name="DetailPage" component={Detail} options={{
            title: 'Detail',
            headerStyle:{backgroundColor:"#FE9B4B"},
            headerTitleStyle:{color:"#fff"},
            headerTintColor:"#fff",
            headerTitleAlign:"center"
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
