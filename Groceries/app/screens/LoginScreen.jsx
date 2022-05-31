import React, { useContext, useEffect } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'
import { auth } from '../../firebase'
import navigationTheme from '../navigation/navigationTheme'
import { useNavigation } from '@react-navigation/native'
import route from '../navigation/route'
import AuthContext from '../auth/context'

const validationSchemas = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen() {
  const authContext = useContext(AuthContext)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        authContext.setUser(user)
      }
    })
    return unsubscribe
  }, [])

  const handleLogin = (userInfo) => {
    auth
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredentials) => {
        const user = userCredentials.user
        authContext.setUser(user)

        console.log('Logged in with: ', user.email)
      })
      .catch((error) => console.log(error))
  }
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleLogin(values)}
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

        <SubmitButton title="Login" />
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

export default LoginScreen
