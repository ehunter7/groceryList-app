import React from 'react'
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import IngredientsList from '../components/IngredientsList'
import ListItem from '../components/ListItem'
import RecipeInstructions from '../components/RecipeInstructions'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function RecipeDetailsScreen({ route }) {
  const listing = route.params.recipe
  let prep = 0
  let cook = 0

  if (listing.preTime || listing.cookTime) {
    prep = parseInt(listing.prepTime)
    cook = parseInt(listing.cookTime)
  }
  const totalTime = prep + cook
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: listing.image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.description}>{listing.description}</AppText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 15,
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color={colors.medium}
            />
            <Text>Prep {prep} mins</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color={colors.medium}
            />
            <Text>Cook {cook} mins</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color={colors.medium}
            />

            <Text>Total {totalTime} mins</Text>
          </View>
        </View>
        <IngredientsList ingredients={listing.ingredients} />
        <RecipeInstructions instructions={listing.instructions} />
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/default_profile.jpg')}
            title="profile"
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
