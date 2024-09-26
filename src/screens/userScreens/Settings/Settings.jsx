import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
    return (
        <View style={styles.settingView}>
            <Text style={styles.settingText} >Settings</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    settingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    }
})