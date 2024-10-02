import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

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
        padding: 6,
        backgroundColor : '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    deleteBtnText : {
        fontWeight: '600',
        fontSize: 14,
        color: 'black'
    }
})