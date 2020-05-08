import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'



const EarningHistoryScreen = props => {

    const [history, setHistory] = useState([])
    const fetchHistory = async () => {
        const response = await fetch('https://hedgebetcalculator.com/services/offerhistory', {
            method: 'GET', headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: props.route.params.userToken,
            }
        })
        setHistory(await response.json())
    }



    useEffect(() => {
        fetchHistory()
    }, [])


    return (<FlatList
        data={history}
        keyExtractor={item => Math.random().toString()}
        renderItem={({ item }) => (
            <View style={{ margin: 5, borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text>item.offerName</Text><Text>+{item.offerAmount}</Text></View>

                <Text>{item.createdAt}</Text>
            </View>
        )}
    ></FlatList >)

    // return (<Text>Hey</Text>)
}

export default EarningHistoryScreen