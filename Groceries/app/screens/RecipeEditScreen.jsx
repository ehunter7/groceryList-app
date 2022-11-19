import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormPicker from '../components/AppFormPicker'
import SubmitButton from '../components/forms/SubmitButton'
import Screen from '../components/Screen'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/forms/FormImagePicker'
import useLocation from '../hooks/useLocation'
import recipesApi from '../api/recipes'
import UploadScreen from './UploadScreen'
import API from '../api/api'
import AuthContext from '../auth/context'
import AppTextInput from '../components/AppTextInput'
import InstructionsInput from '../components/InstructionsInput'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  description: Yup.string().required().label('Description'),
  // instructions: Yup.string().label('Instructions'),
  category: Yup.object().required().nullable().label('Category'),
  // images: Yup.array().min(1, 'Please select at least one image'),
  image: Yup.string().required().label('Image'),
})

const categories = [
  { label: 'Breakfast', value: 1, backgroundColor: 'green', icon: 'coffee' },
  { label: 'Snack', value: 2, backgroundColor: 'blue', icon: 'food-apple' },
  { label: 'Lunch', value: 3, backgroundColor: 'purple', icon: 'food' },
  { label: 'Dinner', value: 4, backgroundColor: 'red', icon: 'food-variant' },
  { label: 'Dessert', value: 5, backgroundColor: 'yellow', icon: 'ice-cream' },
]

function RecipeEditScreen() {
  const [text, onChangeText] = React.useState('Useless Text')
  const [number, onChangeNumber] = React.useState(null)

  const [instructionstep, setInstructionStep] = useState(1)
  const [instructions, setInstructions] = useState([
    { step: instructionstep, content: '' },
  ])
  const [ingredientstep, setIngredientStep] = useState(1)
  const [ingredients, setIngredients] = useState([
    { step: ingredientstep, content: '' },
  ])
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(false)
  const authContext = useContext(AuthContext)

  const handleSubmit = async (recipe, { resetForm }) => {
    setProgress(1)

    setUploadVisible(true)

    const familyName = authContext.user.family

    recipe.instructions = instructions
    recipe.ingredients = ingredients

    const recipes = await API.addRecipe(recipe, familyName)

    authContext.setRecipes(recipes.data)

    resetForm()
  }

  const addInstructions = () => {
    setInstructionStep(instructionstep + 1)
    instructions.push({ step: instructionstep + 1, content: '' })
  }

  const addIngredient = () => {
    setIngredientStep(ingredientstep + 1)
    ingredients.push({ step: ingredientstep + 1, content: '' })
  }

  const renderItem = ({ item }) => (
    <InstructionsInput
      item={item}
      set={setInstructions}
      list={instructions}
      name="Instruction"
      stepLabel="Step"
    />
  )

  const renderIngredients = ({ item }) => (
    <InstructionsInput
      item={item}
      set={setIngredients}
      list={ingredients}
      name="Ingredient"
      stepLabel="Ingredient"
    />
  )

  return (
    <KeyboardAvoidingWrapper>
      <Screen style={styles.container}>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <AppForm
          initialValues={{
            title: '',
            description: '',
            category: null,
            image: '',
            prepTime: 0,
            cookTime: 0,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="image" />
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            maxLength={500}
            name="description"
            placeholder="Description"
          />
          <AppFormPicker
            items={categories}
            name="category"
            placeholder="Category"
            numberOfColumns={3}
            width="50%"
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Text style={{ alignSelf: 'center' }}>Prep Time</Text>
            <AppFormField
              maxLength={3}
              name="prepTime"
              placeholder="prep time"
              keyboardType="numeric"
              width="28%"
            />
            <Text style={{ alignSelf: 'center' }}>Cook Time</Text>

            <AppFormField
              maxLength={3}
              name="cookTime"
              placeholder="cook time"
              keyboardType="numeric"
              width="28%"
            />
          </View>
          {/* <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="useless placeholder"
              keyboardType="numeric"
            /> */}
          <Text>Ingredients</Text>
          <Button title="add" onPress={addIngredient} />
          <FlatList
            data={ingredients}
            renderItem={renderIngredients}
            keyExtractor={(item) => item.id}
          />

          <Text>Instructions</Text>
          <Button title="add" onPress={addInstructions} />
          <FlatList
            data={instructions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <SubmitButton title="Save" />
        </AppForm>
      </Screen>
    </KeyboardAvoidingWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default RecipeEditScreen
