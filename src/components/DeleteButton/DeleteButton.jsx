import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'


const DeleteButton = ({style}) => {
  return (
    <TouchableOpacity style= {[styles.deleteBtn , style]}>
        <Text style = {styles.deleteBtnText} >Delete</Text> 
    </TouchableOpacity>
  )
}

export default DeleteButton

const styles = StyleSheet.create({
    deleteBtn : {
        padding: scale(6),
        backgroundColor : '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(5)
    },
    deleteBtnText : {
        fontWeight: '600',
        fontSize: scale(14),
        color: 'black'
    }
})