import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import route from '../navigation/route'

const recipes = [
  {
    id: 1,
    title: 'Lasagna',
    descripion: 'Meaty Goodness',
    image: require('../assets/lasagna.jpg'),
  },
  {
    id: 2,
    title: 'Rice and Beans',
    descripion: 'Wholesome',
    image: require('../assets/rice-beans.jpg'),
  },
]

function RecipesScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.descripion}
            image={item.image}
            onPress={() => navigation.navigate(route.RECIPE_DETAILS, item)}
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
