import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TodoInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Your Course Goal!' value={props.value} onChangeText={props.onChangeText}/>
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
    inputContainer:{
        width: '93%',
        height: 60,
        borderWidth: 0.5,
        borderColor: '#cccccc', 
        backgroundColor: '#e8e1fcdc',
        padding: 10,
        borderRadius: 6,
        marginBottom: 16,
        justifyContent: 'center',
    },
    input:{
        fontSize: 16,
        textAlign: 'start',
        color: '#b6b1b1ff',
        paddingLeft: 4
    }
})