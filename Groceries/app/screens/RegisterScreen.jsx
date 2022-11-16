import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { auth, firebase } from '../../firebase'

import API from '../api/api'
import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import Screen from '../components/Screen'
import SubmitButton from '../components/forms/SubmitButton'

const validationSchemas = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
  const handleSignUp = (userInfo) => {
    auth
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredentials) => {
        const user = userCredentials.user
        firebase
          .firestore()
          .collection('families')
          .doc(user.email)
          .set({
            name: user.email,
            password: user.email,
            userIds: [user.uid],
          })

        console.log('Registered with: ', user.email)
      })
      .catch((error) => console.log(error))
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/mountains.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSignUp(values)}
        validationSchema={validationSchemas}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
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

        <SubmitButton title="Register" />
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

export default RegisterScreen
