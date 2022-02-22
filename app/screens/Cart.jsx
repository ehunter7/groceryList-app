import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PageHeader from '../components/PageHeader'
import ItemList from '../components/ItemList'

export default function Cart() {
  return (
    <View>
      <PageHeader title="Grocery List" />
      <ItemList />
    </View>
  )
}

const styles = StyleSheet.create({})
