import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/authScreens/Login/Login";
import ForgetPassword from "../screens/authScreens/ForgetPassword/ForgetPassword";
import Register from "../screens/authScreens/Register/Register";
import SetPassword from "../screens/authScreens/SetPassword/SetPassword";
import ChooseYourAccount from "../screens/authScreens/ChooseYourAccount/ChooseYourAccount";
import navigationStrings from "../constants/NavigationStrings";


export default function AuthNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.FORGETPASSWORD} component={ForgetPassword} />
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
            <Stack.Screen name={navigationStrings.SETPASSWORD} component={SetPassword} />
            <Stack.Screen name={navigationStrings.CHOOSEYOURACCOUNT} component={ChooseYourAccount} />
        </Stack.Navigator>
    )
}