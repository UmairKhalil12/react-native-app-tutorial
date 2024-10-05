import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'


const ConfirmButton = ({ style }) => {
    return (
        <TouchableOpacity style={[styles.confirmBtn, style]} >
            <Text style={styles.confirmBtnText} >Confirm</Text>
        </TouchableOpacity>
    )
}

export default ConfirmButton

const styles = StyleSheet.create({
    confirmBtn: {
        padding: scale(6) ,
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(5)
    },
    confirmBtnText: {
        fontWeight: '600',
        fontSize: scale(14),
        color: 'white'
    },

})