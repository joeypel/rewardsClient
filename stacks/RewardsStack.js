import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import RewardsScreen from '../screens/RewardsScreen'
import RewardsConfirmationScreen from '../screens/RewardsConfirmationScreen'
const Stack = createStackNavigator();


const RewardsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rewards" component={RewardsScreen} />
            {/* <Stack.Screen name="TaskDetails" component={TaskDetails}/> */}
            <Stack.Screen name="Confirm Reward" component={RewardsConfirmationScreen} />
        </Stack.Navigator>
    )
}

export default RewardsStack