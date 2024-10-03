import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const StoriesBar = () => {
    const stories = [
        {
            id: 1,
            text: 'Add to your story',
            accountDp: require('../../assets/images/profilePhoto.jpg'),
            iconName: 'add-circle'
        },
        {
            id: 2,
            accountName: 'FC Barcelona',
            accountDp: require('../../assets/images/fcb.jpg'),
            storyImg: require('../../assets/images/barcaStory.jpeg'),
        },
        {
            id: 3,
            accountName: 'Real Madrid',
            accountDp: require('../../assets/images/realMadrid.png'),
            storyImg: require('../../assets/images/realStory.webp'),
        },
        {
            id: 4,
            accountName: 'Manchester City',
            accountDp: require('../../assets/images/mancity.jpeg'),
            storyImg: require("../../assets/images/ManCity.webp")
        }
    ]

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.storiesBarView}
            >
                {stories?.map((story, index) => {
                    return (
                        index === 0 ? (
                            <View key={story?.id} style={styles.storyView}>
                                <Image style={styles.addStoryDp} source={story?.accountDp} />
                                <View style={styles.addIconText} >
                                    <Icon name={story?.iconName} style={styles.addStoryIcon} size={30} color="white" />
                                    <Text style={styles.addStoryText}>{story?.text}</Text>
                                </View>

                            </View>
                        ) : (
                            <View key={story?.id} style={styles.storyView}>
                                <Image source={story?.storyImg} style={styles.storyImg} />
                                <Image source={story?.accountDp} style={styles.accountImg} />
                                <Text style={styles.accountText}>{story?.accountName}</Text>
                            </View>
                        )
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default StoriesBar

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 5 }, 
        // shadowOpacity: 0.25, 
        // shadowRadius: 3.84, 
        // elevation: 5,
    },
    storiesBarView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    storyView: {
        position: 'relative',
        marginRight: 10,
    },
    accountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        position: 'absolute',
        top: '70%',
        left: '10%',
        width: '90%',
    },
    storyImg: {
        height: 220,
        width: 120,
        opacity: 0.8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius : 10
    },
    accountImg: {
        height: 40,
        width: 40,
        borderRadius: 100,
        borderColor: '#1877F2',
        borderWidth: 2,
        position: 'absolute',
        left: 5,
        top: 5,
    },
    addStoryDp: {
        height: 220,
        width: 120,
        borderRadius: 10,
        position: 'relative',
        opacity: 0.8,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius : 10
    },
    addIconText: {
        position: 'absolute',
        top: 100,
        left: 10
    },
    addStoryIcon: {
        right: 10,
        textAlign: 'center',
        color: '#1877F2',
        fontSize: 40
    },
    addStoryText: {
        marginTop: 5,
        color: 'black',
        fontSize: 12,
        fontWeight: '900',
        textAlign: 'center',
        width: '80%'
    },
})
