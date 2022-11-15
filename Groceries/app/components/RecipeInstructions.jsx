import React from 'react'
import { Text } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../config/colors'

import AppButton from './AppButton'
import AppText from './AppText'
import RecipeHeader from './RecipeHeader'

function RecipeInstructions({ instructions }) {
  const [instructionsText, onChangeInstructionsText] = React.useState([
    instructions,
  ])
  const [edit, setEdit] = React.useState(false)

  return (
    <View style={styles.container}>
      <RecipeHeader title="INSTRUCTIONS" edit={edit} setEdit={setEdit} />
      {edit ? (
        <>
          <TextInput
            multiline
            numberOfLines={15}
            textAlignVertical="top"
            maxLength={1000}
            style={styles.input}
            onChangeText={onChangeInstructionsText}
            value={instructionsText}
          />
          <AppButton title="Save" />
        </>
      ) : (
        instructions?.map((step) => {
          return (
            <>
              <Text>Step {step.step}</Text>
              <AppText style={styles.text}>{step.content}</AppText>
            </>
          )
        })
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.accessory,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  text: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
})

export default RecipeInstructions
