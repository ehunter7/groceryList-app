import React from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import IngredientsList from '../components/IngredientsList'
import ListItem from '../components/ListItem'
import RecipeInstructions from '../components/RecipeInstructions'
import colors from '../config/colors'
import { Image } from 'react-native-expo-image-cache'
function RecipeDetailsScreen({ route }) {
  const listing = route.params
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.description}>{listing.description}</AppText>
        </View>
        <IngredientsList />
        <RecipeInstructions />
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/lenai.png')}
            title="Lenai"
            subTitle="66 Recipes"
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  description: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    paddingLeft: 15,
  },
  image: {
    width: '100%',
    height: 300,
  },
  userContainer: {
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
})

export default RecipeDetailsScreen
