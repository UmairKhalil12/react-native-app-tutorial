import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';
import NavigationTopBar from '../components/NavigationTopBar/NavigationTopBar';
import { SafeAreaView } from 'react-native';

export default function Routes() {
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const data = await AsyncStorage.getItem('email');
        console.log(data, 'data key: email');
        if (data !== null) {
            setEmail(data);
        } else if (data === null) {
            setEmail(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return null;
    }

    return (
        <NavigationContainer>
            {email ?
                <NavigationTopBar />
                : <AuthNavigation />}
        </NavigationContainer>
    );
}
