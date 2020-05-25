import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';



const EarningHistoryScreen = props => {

    const [history, setHistory] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const fetchHistory = async () => {
        setIsRefreshing(true)
        const response = await fetch('https://hedgebetcalculator.com/services/offerhistory', {
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
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginVertical: 10 }}>No offers have been completed yet!</Text>
                <Button block rounded onPress={() => fetchHistory()}><Text>Retry!</Text></Button>
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
                        <Text>{JSON.stringify(item.offerName)}</Text>
                        <Text note numberOfLines={1}>ID:{item.offerID}</Text>
                        <Text note numberOfLines={1}>{JSON.stringify(item.createdAt)}</Text>
                    </Body>
                    <Right>
                        <Text numberOfLines={1}>+{item.offerAmount} coins</Text>
                    </Right>
                </ListItem>
            )}
        ></FlatList >
        </List>)
}

export default EarningHistoryScreen