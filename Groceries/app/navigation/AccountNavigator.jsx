import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import route from './route'
import FamilyScreen from '../screens/FamilyScreen'

const Stack = createNativeStackNavigator()

const AcccountNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={route.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={route.MESSAGES} component={MessagesScreen} />
    <Stack.Screen name={route.FAMILY} component={FamilyScreen} />
  </Stack.Navigator>
)

export default AcccountNavigator
