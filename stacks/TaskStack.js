import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'

import TaskScreen from '../screens/TaskScreen'
import TaskDetailScreen from '../screens/TaskDetailScreen'
const Stack = createStackNavigator();


const TaskStack = () => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Tasks" component={TaskScreen} options={{
            }} />
            <Stack.Screen name="Task Info" component={TaskDetailScreen} options={{ headerBackTitle: 'Back' }} />
        </Stack.Navigator>
    )
}

export default TaskStack