import * as React from 'react';
import Constants from 'expo-constants';

import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Home"  />
      <Drawer.Screen name="Profile"  />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Tab
// export default function App() {
//   return (
//     <NavigationContainer>
//      <Tab.Navigator>
//       <Tab.Screen name="Home"  />
//       <Tab.Screen name="Profile"  />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }