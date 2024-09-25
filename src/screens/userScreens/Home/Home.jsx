import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NavigationStrings from '../../../constants/NavigationStrings'

const Home = ({ navigation }) => {
    const handleSignout = async () => {
        await AsyncStorage.removeItem('email');
        navigation.reset({
            index: 0, 
            routes: [{ name: NavigationStrings.LOGIN }]
          });
    }
    return (
        <View style={styles.homeView}>
            <Text>Home</Text>
            <TouchableOpacity style={styles.homeBtn} onPress={handleSignout} >
                <Text style={styles.homeBtnText} > Signout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'blue'
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