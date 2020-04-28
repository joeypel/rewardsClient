import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'

import HeaderButton from "../components/HeaderButton";
import TaskScreen from '../screens/TaskScreen'
import AccountMOdal from '../components/AccountModal'
const Stack = createStackNavigator();


const TaskStack = () => {
    const [isAccountModalVisible, setIsAccountModalVisible] = useState(false)

    const toggleAccountModal = () => { setIsAccountModalVisible(!isAccountModalVisible) }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Tasks" component={TaskScreen} options={{
            }} />
            <Stack.Screen name="Account" component={AccountMOdal} />
            {/* <Stack.Screen name="TaskDetails" component={TaskDetails}/> */}
        </Stack.Navigator>
    )
}

export default TaskStack