import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsTab = ({ imgName, Name }) => {
    return (
        <View style={styles.settingsTab} >
            <Icon name={imgName} size={30} color='dodgerblue' />
            <Text style={styles.settingsTabText} >{Name}</Text>
        </View>
    )
}

export default SettingsTab

const styles = StyleSheet.create({
    settingsTab: {
        padding: 10,
        width: '95%',
        marginTop: '2%',
        height: 70,
        shadowColor: '#000',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 10,
    },
    settingsTabText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    }
})