import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'

import SpinnerScreen from '../screens/SpinnerScreen'
const Stack = createStackNavigator();


const TaskStack = () => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Spin to Win" component={SpinnerScreen} options={{
            }} />
        </Stack.Navigator>
    )
}

export default TaskStack