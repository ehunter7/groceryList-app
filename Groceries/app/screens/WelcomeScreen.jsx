import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import route from '../navigation/route'
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <Image style={styles.logo} source={require('../assets/mountains.png')} />
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate(route.LOGIN)}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(route.REGISTER)}
        />
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
    borderRadius: '100%',
    borderColor: colors.accents,
    borderWidth: 2,
    width: 200,
    height: 200,
    position: 'absolute',
    top: 70,
  },
})

export default WelcomeScreen
