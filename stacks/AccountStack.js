import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import AccountScreen from '../screens/AccountScreen'
import AuthScreen from '../screens/AuthScreen'
const Stack = createStackNavigator();


const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Auth" component={AuthScreen}/>
        </Stack.Navigator>
    )
}

export default AccountStack