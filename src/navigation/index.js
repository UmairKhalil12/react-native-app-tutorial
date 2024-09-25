import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import authNavigation from './authNavigation';
import userNavigation from './userNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Routes() {
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const data = await AsyncStorage.getItem('email');
        console.log(data, 'data key: email');
        if (data !== null) {
            setEmail(data);
        } else {
            setEmail(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    });

    if (loading) {
        return null;
    }

    return (
        <NavigationContainer>
            {email ? userNavigation() : authNavigation()}
        </NavigationContainer>
    );
}
