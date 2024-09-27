import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'

const MarketPlace = ({ navigation }) => {
    return (
        <>
            <ScreenTopBar title='Market Place' />
            <View style={styles.MarketView}>
                <Text style={styles.MarketText} >Market Place</Text>
            </View>
        </>
    )
}

export default MarketPlace

const styles = StyleSheet.create({
    MarketView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MarketText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    }
})