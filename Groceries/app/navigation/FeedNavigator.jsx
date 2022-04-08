import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipesScreen from '../screens/RecipesScreen'
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen'

const Stack = createNativeStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Recipes" component={RecipesScreen} />
    <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
  </Stack.Navigator>
)

export default FeedNavigator
