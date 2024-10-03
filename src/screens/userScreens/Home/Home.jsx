import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PostingBar from '../../../components/PostingBar/PostingBar'
import StoriesBar from '../../../components/StoriesBar/StoriesBar'
import PostComponent from '../../../components/PostComponent/PostComponent'

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
        alignItems: 'center', // Center the content horizontally
        paddingVertical: 20,  // Add vertical padding if needed
    },
    homeView: {
        flex: 1,
        alignItems: 'center',
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
