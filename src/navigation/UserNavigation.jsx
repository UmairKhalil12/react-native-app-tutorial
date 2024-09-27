import HomeTopBar from "../components/HomeTopBar/HomeTopBar";
import NavigationStrings from "../constants/NavigationStrings";
import Home from "../screens/userScreens/Home/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function UserNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown : false , header : () =><HomeTopBar />}} >
            <Stack.Screen name={NavigationStrings.HOME} component={Home} />
        </Stack.Navigator>
    )
}