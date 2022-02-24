import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'

import AppButton from './AppButton'
import AppText from './AppText'

function Indgredient({ edit, text, setText }) {
  const [checked, setChecked] = React.useState(false)
  return (
    <View style={{ margin: 5 }}>
      {edit ? (
        <>
          <TextInput
            multiline
            numberOfLines={15}
            textAlignVertical="top"
            maxLength={1000}
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
          <AppButton title="Save" />
        </>
      ) : (
        <View style={styles.item}>
          <AppText
            style={checked ? { textDecorationLine: 'line-through' } : null}
            onPress={() => setChecked(!checked)}
          >
            {text}
          </AppText>
          <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: 40,
  },
})

export default Indgredient
