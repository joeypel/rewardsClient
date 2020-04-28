import React, { useState, } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'

import Card from '../components/Card'
import RewardsItem from '../components/RewardsItem'

const RewardsScreen = props => {

    return (
        <FlatList
            data={rewardsData}
            keyExtractor={item => Math.random().toString()}
            renderItem={({ item }) => (
                <RewardsItem title={item.title} price={item.price} image={('https://via.placeholder.com/350x150')} onSelect={() => { console.log("selected reward") }}></RewardsItem>
            )}
        ></FlatList >
    )
}

export default RewardsScreen

const rewardsData = [{ title: "Paypal $10", price: 1000 }, { title: "Amazon $10 Giftcard", price: 1000 }, { title: "$10 Bitcoin", price: 1000 }]
// console.log(new Map(Object.entries(taskData)))
// console.log(x.get("6500"))