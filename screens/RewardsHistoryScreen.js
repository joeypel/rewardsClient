import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';



const EarningHistoryScreen = props => {

    const [history, setHistory] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const fetchHistory = async () => {
        setIsRefreshing(true)
        const response = await fetch('https://hedgebetcalculator.com/services/rewardhistory', {
            method: 'GET', headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: props.route.params.userToken,
            }
        })
        setHistory(await response.json())
        setIsRefreshing(false)
    }

    useEffect(() => {
        fetchHistory()
    }, [])


    if (history.length === 0 && !isRefreshing) {
        return (
            <View>
                <Text>No rewards have been redeemed yet!</Text>
                <Button onPress={() => fetchHistory()}><Text>Retry!</Text></Button>
            </View>
        )
    }

    return (
        <List style={{ flex: 1 }}><FlatList
            data={history}
            keyExtractor={item => Math.random().toString()}
            renderItem={({ item }) => (
                <ListItem>
                    <Body>
                        <Text>Offer name</Text>
                        <Text note numberOfLines={1}>ID:{item.offerID}</Text>
                        <Text note numberOfLines={1}>{JSON.stringify(item.createdAt)}</Text>
                    </Body>
                    <Right>
                        <Text>+{item.offerAmount} coins</Text>
                    </Right>
                </ListItem>
            )}
        ></FlatList >
        </List>)
}

export default EarningHistoryScreen