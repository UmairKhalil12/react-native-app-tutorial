import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'


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
        height : verticalScale(30),
        marginTop : scale(8),
        borderRadius : scale(10),
    },
    buttonText  :{
        color : 'black',
        fontSize : scale(14),
        textAlign : 'center',
        textTransform : 'capitalize',
        fontWeight : '600'
    }
})