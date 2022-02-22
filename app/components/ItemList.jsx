import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDown from './DropDown'
import { useStateContext } from '../utils/GlobalState'

export default function ItemList() {
  const [state, dispatch] = useStateContext()

  let cart = state.cartItems

  //handles when user checks off item on list
  //Passes in e which is the item being checked off
  function handlePress(incomingItem) {
    //UpdatedCART contains modified list after item is checked off list
    const updatedCART = state.cartItems.cart.map((cartObject) => {
      //Finds the item that has been checked off in the list and changes its "Checked" status

      //Used to track how many items have been chekced off.
      let count
      const newItem = cartObject.data.map((cartItem) => {
        if (cartItem.name === incomingItem.name) {
          //When item is found in array set checked value
          return { ...cartItem, checked: !cartItem.checked }
        }
        //otherwise return item as is
        return cartItem
      })

      //Finds the location which the item being checked off is located in and increments or decrements count of checked off items
      if (cartObject.area === incomingItem.area) {
        // If item is already checked off and user is unchecking it, remove the area from the areaArray
        if (incomingItem.checked) {
          //If item is being unchecked, decrement count
          count = cartObject.itemCheckedCount - 1
          var token = true
          const newData = toggleChecked.area.filter((item) => {
            if (item === incomingItem.area && token) {
              token = false
              return null
            }
            return item
          })
          setToggleChecked({
            ...toggleChecked,
            area: newData,
          })
        } else {
          //item was not checked
          //If item is being chekced off, increment count
          count = cartObject.itemCheckedCount + 1

          const newData = toggleChecked.area.concat(incomingItem.area)
          setToggleChecked({
            ...toggleChecked,
            area: newData,
          })
        } //End of checked or unchecked check, still within area

        //If there is an item checked in locations list, set checked to true otherwise set to false
        let checked = count > 0

        return {
          ...cartObject,
          itemChecked: checked,
          itemCheckedCount: count,
          data: newItem,
        }
      } else {
        return { ...cartObject, data: newItem }
      }
    }) //End of updatedCART .map method
    //sets the grocery list state to new updated list
    setCart(updatedCART)
    API.Checkoff(incomingItem, state.cartItems).then((res) => {
      // console.log(res.data.cart);
      // setArray();
    })
    //dispatch({ type: "set-cart-item", payload: [updatedCART] });
  }

  return (
    <SectionList
      sections={cart}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.sectionHeader}>{section.area}</Text>
            {section.itemCheckedCount > 0 ? (
              <Text
                style={styles.itemsDown}
              >{`${section.itemCheckedCount} Down`}</Text>
            ) : null}
            <DropDown section={section} />
          </View>
        )
      }}
      renderItem={({ item }) => {
        if (
          !item.checked ||
          state.toggleChecked.currentArea.includes(item.area)
        ) {
          return <ListItem item={item} handlePress={handlePress} />
        } else {
          return null
        }
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
