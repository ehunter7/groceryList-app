import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountScreen from '../screens/AccountScreen'
import RecipeEditScreen from '../screens/RecipeEditScreen'
import RecipesScreen from '../screens/RecipesScreen'
import FeedNavigator from './FeedNavigator'
import AcccountNavigator from './AccountNavigator'
import NewRecipeButton from './NewRecipeButton'
import route from './route'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name={route.FEED}
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={route.RECIPE_EDIT}
      component={RecipeEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewRecipeButton
            onPress={() => navigation.navigate(route.RECIPE_EDIT)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name={route.ACCOUNT}
      component={AcccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator
