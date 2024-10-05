import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';

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
        gap: scale(5),
        backgroundColor : '#DCDCDC',
        borderRadius : scale(100),
        padding : scale(3)
    },
    logoBtnText: {
        fontSize: scale(16),
        color: 'black',
        alignItems : 'center',
        justifyContent : 'center',
        textAlign : 'center',
        fontWeight : '600'
    },
    logoBtnLogo: {
        fontSize: scale(24),
        color: 'black',
        fontWeight : '600'
    }
})