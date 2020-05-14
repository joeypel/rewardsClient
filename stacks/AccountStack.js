import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import AccountScreen from '../screens/AccountScreen'
import EarningHistoryScreen from '../screens/EarningHistoryScreen'
import RewardsHistoryScreen from '../screens/RewardsHistoryScreen'
import { HowItWorksScreen } from "../screens/HowItWorksScreen";
import { TermsOfServiceScreen } from "../screens/TermsOfServiceScreen";
import { PrivacyScreen } from "../screens/PrivacyScreen";
const Stack = createStackNavigator();


const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Earnings" component={EarningHistoryScreen} />
            <Stack.Screen name="Rewards" component={RewardsHistoryScreen} />
            {/* <Stack.Screen name="HowItWorks" component={HowItWorksScreen} />
            <Stack.Screen name="Terms" component={TermsOfServiceScreen} />
            <Stack.Screen name="Privacy" component={PrivacyScreen} /> */}
        </Stack.Navigator>
    )
}

export default AccountStack