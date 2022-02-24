import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import IngredientsList from '../components/IngredientsList'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

function RecipeDetailsScreen(props) {
  const [descText, onChangeDescText] = React.useState('Useless Description')

  const [edit, setEdit] = React.useState(false)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/lasagna.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Lasagna</AppText>
        <AppText style={styles.description}>Meaty goodness</AppText>
      </View>
      <IngredientsList />
      <View>
        {edit ? (
          <>
            <TextInput
              multiline
              numberOfLines={15}
              textAlignVertical="top"
              maxLength={1000}
              style={styles.input}
              onChangeText={onChangeDescText}
              value={descText}
            />
            <AppButton title="Save" onPress={() => setEdit(!edit)} />
          </>
        ) : (
          <AppText onPress={() => setEdit(!edit)}>{descText}</AppText>
        )}
      </View>
      <ListItem
        image={require('../assets/lenai.png')}
        title="Lenai"
        subTitle="66 Recipes"
      />
    </View>
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

  title: {
    fontSize: 24,
    fontWeight: '500',
  },
})

export default RecipeDetailsScreen
