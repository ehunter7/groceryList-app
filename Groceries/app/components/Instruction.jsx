import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements'
import AppText from './AppText'

function Instruction({ text, condition }) {
  const [checked, setChecked] = React.useState(false)
  const [instructionsText, onChangeInstructionsText] = React.useState(text)
  return (
    <View style={styles.container}>
      {condition ? (
        <TextInput
          multiline
          numberOfLines={15}
          textAlignVertical="top"
          maxLength={1000}
          style={styles.input}
          onChangeText={onChangeInstructionsText}
          value={instructionsText.content}
        />
      ) : (
        <>
          <Text>Step {instructionsText.step}</Text>
          <AppText style={styles.text}>{instructionsText.content}</AppText>
          <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  input: {
    //margin: 12,
    marginHorizontal: 40,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
})

export default Instruction
