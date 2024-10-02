import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles"
import FacebookButton from '../../../components/FacebookButton/FacebookButton';
import SettingsTab from '../../../components/SettingsTab/SettingsTab';

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
            Name: 'Friend name',
            Img: require('../../../assets/images/friend1.jpg')
        },
        {
            id: 2,
            Name: 'Friend name',
            Img: require('../../../assets/images/friend2.jpg')
        }
    ]

    const tabs = [
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

    const settings = [
        {
            id: 1,
            title: 'Help & support',
            icon: 'help-circle'
        },
        {
            id: 2,
            title: 'Settings & privacy',
            icon: 'settings'
        },
        {
            id: 3,
            title: 'Professional access',
            icon: 'grid'
        }
    ]

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }} >
            <ScreenTopBar title='Settings' />
            <View style={styles.settingView}  >

                {/* profile view */}
                <View style={styles.profileView} >
                    <TouchableOpacity style={styles.myProfileView} >
                        <Image source={require('../../../assets/images/profilePhoto.png')} style={styles.profilePhoto} />
                        <Text style={styles.profileViewText}> Umair Khalil </Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
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
                                    <Text style={styles.shortcutImgText}> {friend?.Name} </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                {/* Settings Tab */}
                <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
                    {tabs?.map((tab) => {
                        return (
                            <SettingsTab Name={tab?.Name} imgName={tab?.imgName} key={tab?.id} />
                        );
                    })}
                </View>

                {/* Button */}
                <FacebookButton text='see more' />

                {/*Settings Menu */}
                <View style={{ width: '100%', alignItems: 'center', flex: 1 , marginTop: 20,}} >
                    {settings.map((setting, index) => {
                        return (
                            <TouchableOpacity
                                style={
                                    [styles.settingsMainDiv,
                                    index === settings.length - 1 && styles.settingsMainDivLast
                                    ]
                                }
                                key={setting.id} >
                                <View style={styles.settingSubDiv}>
                                    <Icon name={setting?.icon} size={30} color='grey' />
                                    <Text style={styles.settingText}  >{setting.title}</Text>
                                </View>
                                <Icon name='chevron-down-outline' size={20} color='grey' />
                            </TouchableOpacity>
                        )
                    })}
                </View>

                {/* Logout btn */}
                <FacebookButton text='Logout' />

            </View>
        </ScrollView>
    )
}

export default Settings

