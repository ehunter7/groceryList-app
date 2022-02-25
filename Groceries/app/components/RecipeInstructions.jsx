import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../config/colors'

import AppButton from './AppButton'
import AppText from './AppText'
import RecipeHeader from './RecipeHeader'

function RecipeInstructions() {
  const [instructionsText, onChangeInstructionsText] = React.useState(
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  )
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
        <AppText style={styles.text}>{instructionsText}</AppText>
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
