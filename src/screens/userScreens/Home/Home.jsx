import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import NavigationStrings from '../../../constants/NavigationStrings'
import NavigationTopBar from '../../../components/NavigationTopBar/NavigationTopBar'
// import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation }) => {
    const handleSignout = async () => {
        await AsyncStorage.removeItem('email');
        const data = await AsyncStorage.getItem('email')
        console.log(data, 'email signout console')
        // navigation.navigate('login'); 
    }
    return (
        <>
        {/* <NavigationTopBar /> */}
        <View style={styles.homeView}>
            <Text style = {{color : 'black'}} >Home</Text>
            <TouchableOpacity style={styles.homeBtn} onPress={handleSignout} >
                <Text style={styles.homeBtnText} > Signout</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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