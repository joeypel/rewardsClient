import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import Card from '../components/Card'
import RewardsItem from '../components/RewardsItem'
import PageHeader from '../components/PageHeader'

const RewardsScreen = props => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [rewardsData, setRewardsData] = useState([]);
    const userToken = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user);

    const loadRewardsData = async () => {
        setIsRefreshing(true);
        try {
            const res = await fetch(
                `https://hedgebetcalculator.com/services/rewards`,
                {
                    method: 'GET', headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        token: userToken,
                    },
                }
            );

            setRewardsData(await res.json());
        } catch (err) {
            console.log(err)
        }
        setIsRefreshing(false);
    }

    const handleRewardSelect = item => {
        // fetch('https://hedgebetcalculator.com/services/rewardredeem')
        console.log("make post request to redeem item:" + item.title)
    }

    useEffect(() => {
        loadRewardsData()
    }, [])



    return (
        <FlatList
            data={rewardsData}
            ListHeaderComponent={<PageHeader username={userData.username} balance={userData.balance}></PageHeader>}
            keyExtractor={item => Math.random().toString()}
            renderItem={({ item }) => (
                <RewardsItem title={item.title} price={item.price} image={item.image} onSelect={() => handleRewardSelect(item)}></RewardsItem>
            )}
        ></FlatList >
    )
}

export default RewardsScreen

// console.log(new Map(Object.entries(taskData)))
// console.log(x.get("6500"))