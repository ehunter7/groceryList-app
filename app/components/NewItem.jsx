import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function NewItem() {
  const [newItem, setNewItem] = useState({
    itemName: '',
    itemChecked: false,
    itemArea: '',
  })

  return (
    <View style={{ flexDirection: 'row', marginTop: 15 }}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setNewItem({
            ...newItem,
            itemName: text,
            itemChecked: false,
          })
        }}
        value={newItem.itemName}
        placeholder="Item name..."
        keyboardType="default"
        clearButtonMode="always"
      />
      {/* New item location input */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setNewItem({
            ...newItem,
            itemArea: text,
            itemChecked: false,
          })
        }}
        value={newItem.itemArea}
        placeholder="location in store..."
        keyboardType="default"
        clearButtonMode="always"
      />
      <MaterialCommunityIcons
        style={{ marginTop: 5, marginLeft: 8 }}
        name="cart-arrow-down"
        size={24}
        color="black"
        onPress={() => {
          handleNewItemInput()
          setNewItem({ name: '', area: '' })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
