import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Platform, } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import * as UserDataActions from '../store/actions/userData'
import TaskItem from '../components/TaskItem'
import TaskHeader from '../components/TaskHeader'
import PageHeader from '../components/PageHeader'

const TaskScreen = props => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [taskData, setTaskData] = useState([]);
    const userToken = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();


    const loadTasksData = async () => {
        dispatch(UserDataActions.refreshUser(userToken))
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
            if (await res.ok) {
                setTaskData(await res.json());

            }
            else {
                console.log('error loading tasks')

            }

        } catch (err) {
            // console.log(err)
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
        <View style={{ flex: 1 }}>
            <FlatList
                data={taskData}
                keyExtractor={item => item.offer_id}
                ListHeaderComponent={
                    <View>
                        <PageHeader username={userData.username} balance={userData.balance}></PageHeader>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontFamily: 'Avenir', fontSize: 20, marginLeft: 10 }}>Available Tasks</Text>
                            <TaskItem
                                onPress={() => (console.log("handleRewardSelect(item)"))}
                                offerName={"Refer A Friend!"}
                                offerDescription={"Invite your friends and earn 15% of their coin earnings!"}
                                offerAmount={"Unlimited"}
                                image={'holder'}></TaskItem>
                        </View></View>}
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
        </View>
    )
}

export default TaskScreen


// let x = Object.values(taskData)
// let y = [1, 2, 3]
// console.log(new Map(Object.entries(taskData)))
// console.log(x.get("6500"))