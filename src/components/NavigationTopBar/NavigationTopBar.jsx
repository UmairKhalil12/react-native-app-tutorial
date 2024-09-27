import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/userScreens/Home/Home';
import WatchScreen from '../../screens/userScreens/WatchScreen/WatchScreen';
import Notifications from '../../screens/userScreens/Notifications/Notifications';
import FriendRequest from '../../screens/userScreens/FriendRequest/FriendRequest';
import Settings from '../../screens/userScreens/Settings/Settings';
import MarketPlace from '../../screens/userScreens/MarketPlace/MarketPlace';
import HomeTopBar from '../HomeTopBar/HomeTopBar';


const Tab = createMaterialTopTabNavigator();

export default function NavigationTopBar() {
    const [screen, setScreen] = useState('Home');
    console.log(screen, 'screen');

    return (
        <>
            {screen.includes('Home') && <HomeTopBar />}
            <Tab.Navigator
                screenListeners={{
                    focus: (e) => {
                        const routeName = e.target.split('-')[0];
                        setScreen(routeName);
                        console.log(routeName, 'event');
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Icon name={focused ? "home" : 'home-outline'} size={30} color={focused ? 'blue' : 'grey'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Videos"
                    component={WatchScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Icon name={focused ? "play" : 'play-outline'} size={30} color={focused ? 'blue' : 'grey'} />
                        )
                    }}
                />
                <Tab.Screen
                    name="FriendRequest"
                    component={FriendRequest}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Icon name={focused ? "people" : 'people-outline'} size={30} color={focused ? 'blue' : 'grey'} />
                        )
                    }}
                />
                <Tab.Screen
                    name="MarketPlace"
                    component={MarketPlace}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Icon name={focused ? "storefront" : 'storefront-outline'} size={30} color={focused ? 'blue' : 'grey'} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Icon name={focused ? "notifications" : 'notifications-outline'} size={30} color={focused ? 'blue' : 'grey'} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Icon name={focused ? "menu" : "menu-outline"} size={30} color={focused ? 'blue' : 'grey'} />
                        )
                    }}
                />
            </Tab.Navigator>
        </>

    );
}

const styles = StyleSheet.create({

});
