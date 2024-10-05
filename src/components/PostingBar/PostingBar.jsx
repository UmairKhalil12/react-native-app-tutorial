import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale } from 'react-native-size-matters';

const PostingBar = () => {
    return (
        <View style={styles.PostingBarView}>
            <Image source={require('../../assets/images/profilePhoto.jpg')} style={styles.postingBarDp} />
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
        padding: scale(15),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: scale(0), height: scale(3) },
        shadowOpacity: scale(0.25),
        shadowRadius: 0,
        elevation: scale(5),
    },
    barInput: {
        width: '70%',
        borderRadius: scale(50),
        borderWidth: scale(1),
        borderColor: 'grey',
        paddingLeft: scale(20),
        height : verticalScale(40),
        color: 'grey',
        alignItems : 'center',
        justifyContent : 'center',
    },
    postingBarDp: {
        height: verticalScale(50),
        width: scale(50),
        borderRadius: 100,
        borderWidth: scale(1),
        borderColor: 'white'
    }
})