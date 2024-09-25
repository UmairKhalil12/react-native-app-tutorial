import NavigationStrings from "../constants/NavigationStrings";
import Home from "../screens/userScreens/Home/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function userNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown : false}} >
            <Stack.Screen name={NavigationStrings.HOME} component={Home} />
        </Stack.Navigator>
    )
}