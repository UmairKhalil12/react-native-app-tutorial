import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const PostingBar = () => {
    return (
        <View style={styles.PostingBarView}>
            <Image source={require('../../assets/images/profilePhoto.png')} style={styles.postingBarDp} />
            <TextInput placeholder="What's on your mind?" style={styles.barInput} placeholderTextColor={'grey'} />
            <Icon name='image' size={30} color='green' />
        </View>
    )
}

export default PostingBar

const styles = StyleSheet.create({
    PostingBarView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5,
    },
    barInput: {
        width: '70%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'grey',
        paddingLeft: 20,
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey'
    },
    postingBarDp: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    }
})