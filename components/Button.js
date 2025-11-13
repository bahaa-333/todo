import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <Pressable style={[styles.buttonStyle, { backgroundColor: props.color || '#DDDDDD' }]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonStyle:{
        padding: 8,
        alignItems: 'center', 
        textAlign: 'center',
        borderRadius: 5,
        paddingHorizontal: 7,
        paddingVertical: 7
    },
    buttonText:{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: 1.5,
    }
})