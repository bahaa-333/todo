import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = (props) => {
  return (
    <Pressable style={styles.itemContainer} onPress={props.onPress}>
      <Text style={styles.itemText}>{props.text}</Text>
    </Pressable>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    itemContainer:{
        width: '89%',
        height: 48,
        backgroundColor: '#26242452',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 10,
    },
    itemText:{
        color: 'white',
        fontSize: 18,
        padding: 5,
    }
})