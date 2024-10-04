import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const LogoButton = ({ text, logoName, style }) => {
    return (
        <TouchableOpacity style={[styles.logoBtn, style]}>
            <Icon name={logoName} style={styles.logoBtnLogo} />
            <Text style={styles.logoBtnText} >{text}</Text>
        </TouchableOpacity>
    )
}

export default LogoButton

const styles = StyleSheet.create({
    logoBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        backgroundColor : '#DCDCDC',
        borderRadius : 100,
        padding : 3
    },
    logoBtnText: {
        fontSize: 16,
        color: 'black',
        alignItems : 'center',
        justifyContent : 'center',
        textAlign : 'center',
        fontWeight : '600'
    },
    logoBtnLogo: {
        fontSize: 24,
        color: 'black',
        fontWeight : '600'
    }
})