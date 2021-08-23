import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AuthLoading from './screens/AuthLoading';


const BeforeSignin = createNativeStackNavigator({
    Login: {
        screen: LoginScreen
    }
}, {
    headerMode: "none",
    initialRouteName: "Login"
})

const AfterSignin = createNativeStackNavigator({
    Dashboard: {
        screen: DashboardScreen
    }
}, {
    headerMode: "none",
    initialRouteName: "Dashboard"
})