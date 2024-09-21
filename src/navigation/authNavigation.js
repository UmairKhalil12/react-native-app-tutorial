import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/authScreens/Login/Login";
import ForgetPassword from "../screens/authScreens/ForgetPassword/ForgetPassword";
import Register from "../screens/authScreens/Register/Register";
import SetPassword from "../screens/authScreens/SetPassword/SetPassword";
import ChooseYourAccount from "../screens/authScreens/ChooseYourAccount/ChooseYourAccount";

export default function authNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="SetPassword" component={SetPassword} />
                <Stack.Screen name="ChooseYourAccount" component={ChooseYourAccount} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}