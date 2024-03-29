import React, { useContext } from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'
import { auth } from '../../firebase'
import API from '../api/api'
import AuthContext from '../auth/context'

const validationSchemas = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  password: Yup.string().required().min(4).label('Password'),
})

function FamilyScreen() {
  const authContext = useContext(AuthContext)
  const family = authContext.user.family
  console.log('family', family)

  const handleSubmit = (familyInfo) => {
    API.addFamily(familyInfo).then((res) => console.log(res))
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/mountains.png')} />
      <Text>Current family: {family}</Text>
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
          placeholder={'Family Name'}
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
