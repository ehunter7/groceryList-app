import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Constants from 'expo-constants'
export default function OfflineNotice() {
  return (
    <View style={styles.container}>
      <AppText>No Internet Connection</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight,
    width: '100%',
  },
})
