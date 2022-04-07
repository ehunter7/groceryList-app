import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from '../screens/AccountScreen'
import RecipeEditScreen from '../screens/RecipeEditScreen'
import RecipesScreen from '../screens/RecipesScreen'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Recipes" component={RecipesScreen} />
    <Tab.Screen name="RecipeEdit" component={RecipeEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
)

export default AppNavigator
