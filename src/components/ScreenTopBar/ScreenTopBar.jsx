import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenTopBar = ({ title }) => {
    return (
        <View style={styles.screenTopBarView}>
            <Text style={styles.screenTopBarText} >{title}</Text>
            <View style={[styles.screenTopBarIcons,  title === 'Video' || title === 'Market Place' || title === 'Settings' ? styles.screenTopBarMultipleIcons : '']} >
                {title === 'Video' || title === 'Market Place' ? <Icon name='person-outline' size={30} color='black' /> : ''}
                <Icon name='search-outline' size={30} color='black' />
                {title === 'Settings' && <Icon name = 'settings' size={30} color = 'black' />}
            </View>
        </View>
    )
}

export default ScreenTopBar

const styles = StyleSheet.create({
    screenTopBarView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    screenTopBarText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    screenTopBarIcons: {
        width: '10%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    screenTopBarMultipleIcons: {
        width: '20%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }

})