import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PostingBar from '../../../components/PostingBar/PostingBar'
// import HomeTopBar from '../../../components/HomeTopBar/HomeTopBar'

const Home = ({ navigation }) => {
    const handleSignout = async () => {
        await AsyncStorage.removeItem('email');
        const data = await AsyncStorage.getItem('email')
        console.log(data, 'email signout console')
    }
    return (
        <View style={styles.homeView}>
            <PostingBar />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        color: 'black',
        backgroundColor: 'whitesmoke',
    },
    homeBtn: {
        width: 100,
        height: 50,
        color: 'white',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    homeBtnText: {
        color: 'white',
    }
})