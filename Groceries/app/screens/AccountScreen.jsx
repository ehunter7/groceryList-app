import React, { useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { auth } from '../../firebase'
import AuthContext from '../auth/context'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeperator from '../components/ListItemSeperator'
import Screen from '../components/Screen'
import colors from '../config/colors'
import route from '../navigation/route'

const menuItems = [
  {
    title: 'My Recipes',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
]

function AccountScreen({ navigation }) {
  const user = auth.currentUser
  const authContext = useContext(AuthContext)

  const handleLogOut = () => {
    auth.signOut().then(() => {
      alert('Logged out!')
      authContext.setUser(null)
    })
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.email}
          subTitle="#1 Chef"
          image={require('../assets/lenai.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogOut}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
})

export default AccountScreen
