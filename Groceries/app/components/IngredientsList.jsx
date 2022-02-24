import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../config/colors'

import AppButton from './AppButton'
import AppText from './AppText'
import Indgredient from './Indgredient'

var list = ['Useless Ingedient 1', 'Useless Ingedient 2', 'Useless Ingedient 3']
function IngredientsList(props) {
  const [ingText, onChangeIngText] = React.useState([list])
  const [edit, setEdit] = React.useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AppText>INGREDIENTS</AppText>
      </View>
      <View style={styles.list}>
        {list.map((item) => {
          return (
            <Indgredient
              key={item}
              edit={edit}
              text={item}
              setText={onChangeIngText}
            />
          )
        })}
      </View>
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
  list: {
    marginBottom: 20,
  },
  title: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default IngredientsList
