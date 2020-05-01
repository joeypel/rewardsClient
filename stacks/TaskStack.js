import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'

import HeaderButton from "../components/HeaderButton";
import TaskScreen from '../screens/TaskScreen'
const Stack = createStackNavigator();


const TaskStack = () => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Tasks" component={TaskScreen} options={{
            }} />
            {/* <Stack.Screen name="TaskDetails" component={TaskDetails}/> */}
        </Stack.Navigator>
    )
}

export default TaskStack