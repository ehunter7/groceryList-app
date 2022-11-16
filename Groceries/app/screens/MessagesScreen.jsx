import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeperator from '../components/ListItemSeperator'
import Screen from '../components/Screen'

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/default_profile.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/default_profile.jpg'),
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log('Message Selected', item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 1,
              title: 'T1',
              description: 'D1',
              image: require('../assets/default_profile.jpg'),
            },
          ])
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
