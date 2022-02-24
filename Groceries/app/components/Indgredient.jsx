import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'

import AppButton from './AppButton'
import AppText from './AppText'

function Indgredient({ edit, text }) {
  const [checked, setChecked] = React.useState(false)
  const [ingText, onChangeIngText] = React.useState(text)

  return (
    <View style={{ margin: 5 }}>
      {edit ? (
        <>
          <TextInput
            textAlignVertical="top"
            maxLength={10}
            style={styles.input}
            onChangeText={onChangeIngText}
            value={ingText}
          />
        </>
      ) : (
        <View style={styles.item}>
          <AppText
            style={checked ? { textDecorationLine: 'line-through' } : null}
            onPress={() => setChecked(!checked)}
          >
            {ingText}
          </AppText>
          <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    //margin: 12,
    marginHorizontal: 40,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
  },
})

export default Indgredient
