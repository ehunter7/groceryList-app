import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

import AppText from './AppText'

function RecipeHeader({ title, edit, setEdit }) {
  return (
    <View style={styles.title}>
      <AppText>{title}</AppText>
      <View style={styles.edit}>
        <Text
          onPress={() => setEdit(!edit)}
          style={{
            color: colors.secondary,
            fontStyle: 'italic',
            opacity: 0.5,
          }}
        >
          edit
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  edit: {
    position: 'absolute',
    marginLeft: '50%',
    marginTop: 2,
  },
  title: {
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
})

export default RecipeHeader
