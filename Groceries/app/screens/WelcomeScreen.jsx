import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 30,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 70,
  },
})

export default WelcomeScreen
