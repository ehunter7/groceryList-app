import React, { useEffect, useState } from 'react'
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

// const recipes = [
//   {
//     id: 1,
//     title: 'Lasagna',
//     descripion: 'Meaty Goodness',
//     image: require('../assets/lasagna.jpg'),
//   },
//   {
//     id: 2,
//     title: 'Rice and Beans',
//     descripion: 'Wholesome',
//     image: require('../assets/rice-beans.jpg'),
//   },
// ]

function RecipesScreen({ navigation }) {
  const { data: recipes, error, loading, request: loadRecipes } = useApi(
    recipesApi.getRecipes,
  )

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
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price} //Needs to be changed to description in database
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(route.RECIPE_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
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
