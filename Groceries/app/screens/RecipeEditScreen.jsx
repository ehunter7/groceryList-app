import React, { useContext, useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text } from 'react-native'
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
const InstructionsInput = ({ item }) => (
  <>
    <Button title="step" onPress={() => console.log(item.step)} />
    <Text>Step </Text>
    <AppFormField
      maxLength={1000}
      multiline
      numberOfLines={4}
      ANDROIDS
      name="instructions"
      placeholder="instructions"
    />
  </>
)

function RecipeEditScreen() {
  const [step, setStep] = useState(1)
  const [instructions, setInstructions] = useState([
    { step: step, content: '' },
  ])
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(false)
  const authContext = useContext(AuthContext)
  const handleSubmit = async (recipe, { resetForm }) => {
    setProgress(1)

    setUploadVisible(true)
    // const result = await recipesApi.addRecipe({ ...recipe }, (progress) =>
    //   setProgress(progress),
    // ) // removed location

    const familyName = authContext.user.family

    API.addRecipe(recipe, familyName)
    // if (!result.ok) {
    //   setUploadVisible(false)
    //   return alert('Could not save the recipe')
    // }
    resetForm()
  }

  const addInstructions = () => {
    setStep(step + 1)
    instructions.push({ step: step + 1, content: '' })
    // setInstructions(instructions.push({ step: step + 1, content: '' }))
  }

  const renderItem = ({ item }) => <InstructionsInput item={item} />

  return (
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
          instructions: '',
          category: null,
          // images: [],
          image: '',
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
        <Button title="log" onPress={() => console.log(instructions)} />

        <FlatList
          data={instructions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Button title="add" onPress={addInstructions} />
        <SubmitButton title="Save" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default RecipeEditScreen
