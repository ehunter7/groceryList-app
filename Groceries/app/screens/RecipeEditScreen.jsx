import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormPicker from '../components/AppFormPicker'
import SubmitButton from '../components/forms/SubmitButton'
import Screen from '../components/Screen'
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  description: Yup.string().label('Description'),
  instructions: Yup.string().label('Instructions'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Breakfast', value: 1 },
  { label: 'Snack', value: 2 },
  { label: 'Lunch', value: 3 },
  { label: 'Dinner', value: 4 },
  { label: 'Dessert', value: 5 },
]

function RecipeEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          description: '',
          instructions: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        />
        <AppFormField
          maxLength={1000}
          multiline
          numberOfLines={4}
          name="instructions"
          placeholder="Instructions"
        />
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
