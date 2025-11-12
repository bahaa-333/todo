import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    itemContainer:{
        width: '92%',
        height: 60,
        backgroundColor: '#ffffff92',
        marginLeft: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 7
    },
    itemText:{
        color: 'black',
        fontSize: 18,
        padding: 5,
    }
})