import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PostingBar from '../../../components/PostingBar/PostingBar'
import StoriesBar from '../../../components/StoriesBar/StoriesBar'
import PostComponent from '../../../components/PostComponent/PostComponent'
import { scale, verticalScale } from 'react-native-size-matters'

const Home = ({ navigation }) => {
    const handleSignout = async () => {
        await AsyncStorage.removeItem('email');
        const data = await AsyncStorage.getItem('email')
        console.log(data, 'email signout console')
    }

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
            <PostingBar />
            <StoriesBar />
            <PostComponent />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    scrollView: {
        flex: 1, 
        backgroundColor: 'whitesmoke',
        width : '100%'
    },
    scrollViewContent: {
        alignItems: 'center', 
        paddingVertical: verticalScale(20),  
    },
    homeView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
    homeBtn: {
        width: scale(100),
        height:verticalScale(50),
        color: 'white',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(20)
    },
    homeBtnText: {
        color: 'white',
    }
})
