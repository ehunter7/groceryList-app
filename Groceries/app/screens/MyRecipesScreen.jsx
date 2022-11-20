import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import route from '../navigation/route'

import recipesApi from '../api/recipes'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'
import API from '../api/api'
import AuthContext from '../auth/context'

import { auth } from '../../firebase'

function MyRecipesScreen({ navigation }) {
  const authContext = useContext(AuthContext)
  const user = auth.currentUser
  // const { data: recipes, error, loading, request: loadRecipes } = useApi(
  //   recipesApi.getRecipes,
  // )
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [recipes, setRecipes] = useState([])
  const recipes = authContext.recipes

  const loadRecipes = async () => {
    // TODO: I think I can just get the family name from authcontext
    const result = await API.getFamily(user.uid)

    const results = await API.getRecipes(result[0])
    authContext.setRecipes(results)
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadRecipes} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.recipe.title}
              subTitle={item.recipe.description} //Needs to be changed to description in database
              imageUrl={item.recipe.image}
              onPress={() => navigation.navigate(route.RECIPE_DETAILS, item)}
            />
          )
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})

export default MyRecipesScreen
