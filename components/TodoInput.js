import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TodoInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Your Course Goal!' />
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
    inputContainer:{
        width: '98%',
        height: 60,
        borderWidth: 0.5,
        borderColor: '#cccccc', 
        backgroundColor: '#dec6f7ff',
        padding: 10,
        borderRadius: 6,
        marginBottom: 10,
        justifyContent: 'center',
    },
    input:{
        fontSize: 16,
        textAlign: 'start',
        paddingLeft: 4
    }
})