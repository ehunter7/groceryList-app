import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipesScreen from '../screens/RecipesScreen'
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen'
import route from './route'

const Stack = createNativeStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={route.RECIPES} component={RecipesScreen} />
    <Stack.Screen name={route.RECIPE_DETAILS} component={RecipeDetailsScreen} />
  </Stack.Navigator>
)

export default FeedNavigator
