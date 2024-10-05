import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';

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
        padding: scale(10),
        width: '95%',
        marginTop: '2%',
        height: scale(60),
        shadowColor: '#000',
        flexDirection: 'row',
        gap: scale(10),
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
        shadowOffset: {
            width: scale(0),
            height: scale(4),
        },
        shadowOpacity: scale(0.2),
        shadowRadius: scale(6),
        elevation: scale(5),
        borderRadius: scale(10),
    },
    settingsTabText: {
        color: 'black',
        fontSize: scale(15),
        fontWeight: '500'
    }
})