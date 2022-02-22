import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PageHeader from '../components/PageHeader'
import ItemList from '../components/ItemList'
import NewItem from '../components/NewItem'

export default function Cart() {
  return (
    <View>
      <PageHeader title="Grocery List" />
      <ItemList />
      <NewItem />
    </View>
  )
}

const styles = StyleSheet.create({})
