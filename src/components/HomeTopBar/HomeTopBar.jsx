import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';


const HomeTopBar = () => {
    return (
        <View style={styles.homeTabBar}>
            <Text style={styles.facebookText}>facebook</Text>
            <View style={styles.iconView}>
                <Icon name='add-circle-outline' size={30} color='black' />
                <Icon name='search-outline' size={30} color='black' />
                <Icon name='chatbubble-outline' size={30} color='black' />
            </View>
        </View>
    )
}

export default HomeTopBar

const styles = StyleSheet.create({
    homeTabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: scale(10),
        backgroundColor: 'white'
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%'
    },
    facebookText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: scale(25),
        // textTransform : 'capitalize'
    }
})