import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import { FontAwesome, AntDesign} from '@expo/vector-icons'; 


export default function TabNavigation1() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
     }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon:({color,size}) => (
          <FontAwesome name="home" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name='Appointment' component={Appointment}
      options={{
        tabBarIcon:({color,size}) => (
          <AntDesign name="calendar" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name='Profile' component={Profile}
      options={{
        tabBarIcon:({color,size}) => (
          <FontAwesome name="user" size={size} color={color} />
         
        )
      }}/>
    </Tab.Navigator>
  )
}
