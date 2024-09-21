import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import userNavigation from './userNavigation';
import authNavigation from './authNavigation';

export default function Routes() {
    return (
        <NavigationContainer>
            {authNavigation()}
        </NavigationContainer>
    );
}