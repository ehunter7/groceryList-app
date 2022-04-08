import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import route from './route'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={route.WELCOME}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={route.LOGIN} component={LoginScreen} />
    <Stack.Screen name={route.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
)

export default AuthNavigator
