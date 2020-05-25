import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Modal, Image } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';



const EarningHistoryScreen = props => {

    const [history, setHistory] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [modalData, setModalData] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
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

    const handleRewardSelect = reward => {
        setModalData(reward.code)
        setModalVisible(true)
    }


    if (history.length === 0 && !isRefreshing) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginVertical: 10 }}>No rewards have been redeemed yet!</Text>
                <Button block rounded onPress={() => fetchHistory()}><Text>Retry!</Text></Button>
            </View>
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={require('../assets/images/coins.png')} style={styles.image} />
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Here is your reward!</Text>
                        <Text style={{ textAlign: 'center', marginVertical: 15 }}>{modalData}</Text>
                        <Button full rounded onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            <List><FlatList
                data={history}
                keyExtractor={item => Math.random().toString()}
                renderItem={({ item }) => (
                    <ListItem onPress={() => {
                        item.fulfilled ? handleRewardSelect(item) : null
                    }}>
                        <Body>
                            <Text>{item.rewardType}</Text>
                            <Text note numberOfLines={1}>Status: {item.fulfilled ? "Complete, tap to view code!" : "Pending, please wait 24-48 hours"}</Text>
                            <Text note numberOfLines={1}>{JSON.stringify(item.createdAt)}</Text>
                        </Body>
                        <Right>
                            <Text numberOfLines={1}>-{item.rewardPrice}</Text>
                        </Right>
                    </ListItem>
                )}
            ></FlatList >
            </List>
        </View>)
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginVertical: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})

export default EarningHistoryScreen