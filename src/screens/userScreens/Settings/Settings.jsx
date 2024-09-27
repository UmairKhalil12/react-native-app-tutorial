import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles"

const Settings = ({ navigation }) => {

    const truncateTitle = (word, length) => {
        if (word.length > length) {
            return word.slice(0, length) + '...';
        }
        return word;
    };

    const groups = [
        {
            id: 1,
            Name: 'Group Number 1',
            Img: require('../../../assets/images/group2.jpg')
        },
        {
            id: 2,
            Name: 'Group Number 2',
            Img: require('../../../assets/images/group1.jpg')
        }
    ]

    const friends = [
        {
            id: 1,
            Name: 'Friend 1',
            Img: require('../../../assets/images/friend1.jpg')
        },
        {
            id: 2,
            Name: 'Friend 2',
            Img: require('../../../assets/images/friend2.jpg')
        }
    ]

    const settings = [
        {
            id: 1,
            Name: 'Friends',
            imgName: 'people'

        },
        {
            id: 2,
            Name: 'Memory',
            imgName: 'timer'

        },
        {
            id: 3,
            Name: 'Saved',
            imgName: 'bookmark'
        },
        {
            id: 4,
            Name: 'Groups',
            imgName: 'people-circle'
        },
        {
            id: 5,
            Name: 'Video',
            imgName: 'play'
        },
        {
            id: 6,
            Name: 'Market Place',
            imgName: 'storefront'
        }
    ]

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
            <ScreenTopBar title='Settings' />
            <View style={styles.settingView}  >
                {/* profile view */}
                <View style={styles.profileView} >
                    <View style={styles.myProfileView} >
                        <Image source={require('../../../assets/images/profilePhoto.png')} style={styles.profilePhoto} />
                        <Text style={styles.profileViewText}> Umair Khalil </Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.addNewProfile} >
                        <Icon style={{ paddingLeft: 5 }} name='add-circle' size={40} color='grey' />
                        <Text style={styles.addNewProfileText} >Create new profile or page</Text>
                    </View>
                </View>

                {/* Your shortcuts */}
                <View style={styles.shortcutView}>
                    <Text style={styles.shortcutText}>Your shortcuts</Text>
                    <View style={styles.shortcutImageView} >
                        {groups?.map((group) => {
                            return (
                                <View style={styles.shortcutOneView} key={group?.id}>
                                    <Image style={styles.shortcutImg} source={group?.Img} />
                                    <Text style={styles.shortcutImgText}> {truncateTitle(group?.Name, 8)} </Text>
                                </View>
                            )
                        })}

                        {friends?.map((friend) => {
                            return (
                                <View style={styles.shortcutOneView} key={friend?.id}>
                                    <Image style={styles.shortcutFriendImg} source={friend?.Img} />
                                    <Text style={styles.shortcutImgText}> {truncateTitle(friend?.Name, 8)} </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                {/* Settings Tab */}
                <View  style = {{width : '100%' , alignItems : 'center' , flex : 1}}>
                    {settings?.map((setting) => {
                        return (
                            <View style={styles.settingsTab} key={setting?.id} >
                                <Icon name={setting.imgName} size={30} color='dodgerblue' />
                                <Text style={styles.settingsTabText} >{setting?.Name}</Text>
                            </View>
                        );
                    })}
                </View>

            </View>
        </ScrollView>
    )
}

export default Settings

