import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FacebookButton = ({text , style, onPress}) => {
  return (
    <TouchableOpacity style = {[style , styles.button ]} onPress={onPress} >
        <Text style = {styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default FacebookButton

const styles = StyleSheet.create({
    button : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#DCDCDC',
        width : '95%',
        height : 40,
        marginTop : 20,
        borderRadius : 10,
    },
    buttonText  :{
        color : 'black',
        fontSize : 14,
        textAlign : 'center',
        textTransform : 'capitalize',
        fontWeight : '600'
    }
})