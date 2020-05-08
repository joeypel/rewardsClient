import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import AccountScreen from '../screens/AccountScreen'
import EarningHistoryScreen from '../screens/EarningHistoryScreen'
const Stack = createStackNavigator();


const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Earnings" component={EarningHistoryScreen} />
        </Stack.Navigator>
    )
}

export default AccountStack