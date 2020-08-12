import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Platform, TouchableOpacity, ScrollView, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import * as UserDataActions from '../store/actions/userData'
import TaskItem from '../components/TaskItem'
import TaskHeader from '../components/TaskHeader'
import PageHeader from '../components/PageHeader'

const TaskScreen = props => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [taskData, setTaskData] = useState([]);
    const [sortType, setSortType] = useState('Coins↓')
    const userToken = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user);
    const offers = useSelector(state => state.offers)
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
                setIsRefreshing(false);
                throw new Error('Error getting tasks')


            }

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

    const sortedTasks = tasks => {
        if (sortType === 'Coins↓') {
            return tasks.sort((a, b) => b.amount - a.amount)
        }
        else if (sortType === 'Coins↑') {
            return tasks.sort((a, b) => a.amount - b.amount)
        }
        else if (sortType === 'A-Z') {
            return tasks.sort((a, b) => b.offer_name.toUpperCase() < a.offer_name.toUpperCase())
        }
    }

    const removeHiddenTasks = tasks => {
        // console.log(tasks)
        return tasks.filter(item => !offers.hidden.includes(item.offer_name))
        // return tasks.filter(item => offers.hidden.includes(item.name))
    }



    const cycleSortType = () => {
        const sortTypes = ["Coins↓", "Coins↑", "A-Z"]
        //checks if sort type is part of this array above, if not, start at the beginning
        setSortType(sortTypes[sortTypes.indexOf(sortType) + 1] ? sortTypes[sortTypes.indexOf(sortType) + 1] : 'Coins↓')
    }

    if (removeHiddenTasks(taskData).length === 0 && !isRefreshing) {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <PageHeader username={userData.username} balance={userData.balance}></PageHeader>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 20, marginLeft: 10 }}>Available Tasks</Text>
                            <TouchableOpacity onPress={() => { cycleSortType() }}><Text style={{ fontWeight: 'normal', fontFamily: 'Roboto', fontSize: 14, marginLeft: 10 }}>Sort: {sortType}</Text></TouchableOpacity>

                        </View>
                    </View>
                    <Text style={{ textAlign: 'center' }}>No tasks available at the moment!</Text>
                    <Button title="Refresh!" onPress={() => loadTasksData()}></Button>
                </ScrollView>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={removeHiddenTasks(sortedTasks(taskData))}
                keyExtractor={item => item.offer_id}
                ListHeaderComponent={
                    <View>
                        <PageHeader username={userData.username} balance={userData.balance}></PageHeader>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 20, marginLeft: 10 }}>Available Tasks</Text>
                            <TouchableOpacity onPress={() => { cycleSortType() }}><Text style={{ fontWeight: 'normal', fontFamily: 'Roboto', fontSize: 14, marginLeft: 10 }}>Sort: {sortType}</Text></TouchableOpacity>

                        </View>
                        {/* <TaskItem
                            onPress={() => (console.log("handleRewardSelect(item)"))}
                            offerName={"Refer A Friend!"}
                            offerDescription={"Invite your friends and earn 15% of their coin earnings!"}
                            offerAmount={"Unlimited"}
                            image={'holder'}></TaskItem> */}
                    </View>}
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