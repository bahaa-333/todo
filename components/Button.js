import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <PressableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </PressableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: props.color || '#DDDDDD',
        padding: 5,
        alignItems: 'center',
    }
})