import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

var items = [
  {
    id: 1,
    family_id: 666,
    name: 'strawberries',
    checked: false,
    area: 'Produce',
  },
  { id: 1, family_id: 666, name: 'Grapes', checked: false, area: 'Produce' },
  { id: 1, family_id: 666, name: 'Banana', checked: false, area: 'Produce' },
]

var cart = []

export default function ItemList() {
  useEffect(() => {
    updateCart()
  }, [])

  function updateCart() {
    for (item in items) {
      console.log(item)
    }
  }

  return (
    <SectionList
      sections={cart}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.sectionHeader}>{section.area}</Text>
          </View>
        )
      }}
      renderItem={({ item }) => {
        return <ListItem item={item} handlePress={handlePress} />
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
    width: '66%',
  },
  itemsDown: {
    marginLeft: 'auto',
    paddingTop: 12,
    fontSize: 10,
    fontStyle: 'italic',
  },
})
