import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import { addValidStylePropTypes } from 'react-native/Libraries/StyleSheet/StyleSheetValidation'

function AppText({ children, style, onPress }) {
  return (
    <Text onPress={onPress} style={[styles.text, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
})

export default AppText
