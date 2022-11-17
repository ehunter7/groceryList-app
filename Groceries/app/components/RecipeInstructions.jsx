import React from 'react'
import { Text } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../config/colors'

import AppButton from './AppButton'
import AppText from './AppText'
import Instruction from './Instruction'
import RecipeHeader from './RecipeHeader'

function RecipeInstructions({ instructions }) {
  const [edit, setEdit] = React.useState(false)

  return (
    <View style={styles.container}>
      <RecipeHeader title="INSTRUCTIONS" edit={edit} setEdit={setEdit} />
      {instructions?.map((step) => {
        return <Instruction key={step.step} condition={edit} text={step} />
      })}
      {edit ? <AppButton title="Save" onPress={() => setEdit(!edit)} /> : null}
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
})

export default RecipeInstructions
