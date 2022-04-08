import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function NewRecipeButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={45}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 8,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
})
