import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
  },
})
