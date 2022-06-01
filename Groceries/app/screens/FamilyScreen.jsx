import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'
import { auth } from '../../firebase'
import API from '../api/api'

const validationSchemas = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  password: Yup.string().required().min(4).label('Password'),
})

function FamilyScreen() {
  const handleSubmit = (familyInfo) => {
    API.addFamily(familyInfo).then((res) => console.log(res))
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ name: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchemas}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account-group"
          keyboardType="text"
          name="name"
          placeholder="Family Name"
          textContentType="name"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Create Family" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})

export default FamilyScreen
