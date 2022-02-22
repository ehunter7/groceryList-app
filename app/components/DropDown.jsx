import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Handles drop down arrow press, used for displaying checked off items
function handleDropDown(section) {
  var curArea = ''

  if (toggleChecked.currentArea === '') {
    //If location string is empty, set string to location
    curArea = section.area
  } else if (!toggleChecked.currentArea.includes(section.area)) {
    //If location string is not empty and location being opened up has not been added, add location to string
    curArea = toggleChecked.currentArea + section.area
  } else {
    //If loaction string has location in it, remove and replace with nothing
    curArea = toggleChecked.currentArea.replace(section.area, '')
  }
  //Sets state toggleChecked current area to string curArea
  setToggleChecked({
    ...toggleChecked,
    currentArea: curArea,
  })
}

export default function DropDown({ section }) {
  //If current area in iteration is in area that has item checked off and no items have been checked off
  // && section.itemCheckedCount > 0
  if (toggleChecked.area.includes(section.area)) {
    return (
      <Text style={styles.dropdown} onPress={() => handleDropDown(section)}>
        {/* toggleChecked.status && */}
        {toggleChecked.currentArea.includes(section.area) ? (
          <FontAwesome name="angle-up" size={24} color="black" />
        ) : (
          <FontAwesome name="angle-down" size={24} color="black" />
        )}
      </Text>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({})
