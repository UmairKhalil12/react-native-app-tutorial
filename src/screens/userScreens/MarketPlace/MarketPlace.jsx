import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'
import LogoButton from '../../../components/LogoButton/LogoButton'
import AdsComponent from '../../../components/AdsComponent/AdsComponent'

const MarketPlace = ({ navigation }) => {
    return (
        <>
            <ScreenTopBar title='Market Place' />
            <View style={styles.btnView}>
                <LogoButton text={'Sell'} logoName={'pricetags-outline'} style={{width : '48%'}} />
                <LogoButton text={'Categories'} logoName={'grid-outline'} style={{width : '48%'}} />
            </View>
            <AdsComponent />
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
    btnView : {
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    }
})