import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import * as UserDataActions from '../store/actions/userData'
import TaskItem from '../components/TaskItem'
import TaskHeader from '../components/TaskHeader'

const TaskScreen = props => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [taskData, setTaskData] = useState([]);
    const userToken = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();


    const loadTasksData = async () => {
        dispatch(UserDataActions.refreshUser(userToken))//
        setIsRefreshing(true);
        try {
            const res = await fetch(
                `https://hedgebetcalculator.com/services/offers`,
                {
                    method: 'GET', headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        token: userToken,
                        device: Platform.OS
                    },
                }
            );

            setTaskData(await res.json());
        } catch (err) {
            console.log(err)
        }
        setIsRefreshing(false);
    }

    useEffect(() => {
        loadTasksData()

    }, [])

    const handleTaskPress = taskData => {
        props.navigation.navigate('Task Info', { taskData, userData })
    }


    return (
        // <Text>hey</Text>
        <FlatList
            data={taskData}
            keyExtractor={item => item.offer_id}
            ListHeaderComponent={<TaskHeader userData={userData}></TaskHeader>}
            onRefresh={() => loadTasksData()}
            refreshing={isRefreshing}
            renderItem={({ item }) => (<TaskItem
                onPress={() => { handleTaskPress(item) }}
                offerName={item.offer_name}
                offerDescription={item.offer_desc}
                offerAmount={item.amount}
                image={item.image_url_220x124}
            ></TaskItem>)}
        ></FlatList >
    )
}

export default TaskScreen


// let x = Object.values(taskData)
// let y = [1, 2, 3]
// console.log(new Map(Object.entries(taskData)))
// console.log(x.get("6500"))