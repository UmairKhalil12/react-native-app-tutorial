import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../screens/userScreens/Home/Home';
import WatchScreen from '../../screens/userScreens/WatchScreen/WatchScreen';
import Notifications from '../../screens/userScreens/Notifications/Notifications';
import FriendRequest from '../../screens/userScreens/FriendRequest/FriendRequest';
import { StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Settings from '../../screens/userScreens/Settings/Settings';
import MarketPlace from '../../screens/userScreens/MarketPlace/MarketPlace';

const height = StatusBar.currentHeight;
console.log(height, 'height of status bar');
// screenOptions={{ tabBarStyle: [{ marginTop : height }] }}

const Tab = createMaterialTopTabNavigator();

export default function NavigationTopBar() {
    return (
        <Tab.Navigator  >
            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Icon name="home" size={30} color={focused ? 'blue' : 'grey'} />
                    )
                }}
                name="Home"
                component={Home} />

            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Icon name="videocam" size={30} color={focused ? 'blue' : 'grey'} />
                    )
                }}
                name="Videos"
                component={WatchScreen} />

            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Icon name="people" size={30} color={focused ? 'blue' : 'grey'} />
                    )
                }}
                name="FriendRequest"
                component={FriendRequest} />

            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Icon name="storefront" size={30} color={focused ? 'blue' : 'grey'} />
                    )
                }}
                name="MarketPlace"
                component={MarketPlace} />

            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Icon name="notifications" size={30} color={focused ? 'blue' : 'grey'} />
                    )
                }}
                name="Notifications"
                component={Notifications} />

            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Icon name="menu" size={30} color={focused ? 'blue' : 'grey'} />
                    )
                }}
                name="Settings"
                component={Settings} />




        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
}) 