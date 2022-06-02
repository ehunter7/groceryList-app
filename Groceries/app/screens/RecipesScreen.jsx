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
import api from '../api/api'
import { auth } from '../../firebase'

const recipesList = [
  {
    heading: {
      id: 1,
      title: 'Lasagna',
      descripion: 'Meaty Goodness',
      image: require('../assets/lasagna.jpg'),
    },
  },
  {
    heading: {
      id: 2,
      title: 'Rice and Beans',
      descripion: 'Wholesome',
      image: require('../assets/rice-beans.jpg'),
    },
  },
]

function RecipesScreen({ navigation }) {
  const authContext = useContext(AuthContext)
  const user = auth.currentUser
  // const { data: recipes, error, loading, request: loadRecipes } = useApi(
  //   recipesApi.getRecipes,
  // )
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])

  const loadRecipes = async () => {
    let familyName = await api.getFamily(user.uid)
    if (familyName === '') {
      familyName = user.email
      console.log('emptyx', user.email)
    }
    const mUser = {
      ...authContext.user,
      family: familyName,
    }
    authContext.setUser(mUser)
    const results = await API.getRecipes(familyName)
    // // console.log('---------------', results[0].heading.description)
    setRecipes(results)
  }

  useEffect(() => {
    console.log('------------------------effect---------------------')
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

export default RecipesScreen
