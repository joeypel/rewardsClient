import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, TouchableHighlight, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { Button } from 'native-base'
import Card from '../components/Card'
import RewardsItem from '../components/RewardsItem'
import PageHeader from '../components/PageHeader'

const RewardsScreen = props => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [rewardsData, setRewardsData] = useState([]);
    const userToken = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user);

    const [modalVisible, setModalVisible] = useState(false);

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

    const handleRewardSelect = async item => {
        if (userData.balance < item.price) {
            setModalVisible(true)
        } else {
            props.navigation.navigate("Confirm Reward", item)
        }
    }

    useEffect(() => {
        loadRewardsData()
    }, [])



    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={require('../assets/images/coins.png')} style={styles.image} />
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Not Enough Coins!</Text>
                        <Text style={{ textAlign: 'center', marginVertical: 15 }}>You do not have enough coins to redeem this item. Please complete more tasks!</Text>
                        <Button full rounded onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={rewardsData}
                ListHeaderComponent={<PageHeader username={userData.username} balance={userData.balance}></PageHeader>}
                keyExtractor={item => item.title}
                onRefresh={() => loadRewardsData()}
                refreshing={isRefreshing}
                renderItem={({ item }) => (
                    <RewardsItem title={item.title} price={item.price} image={item.image} onSelect={() => handleRewardSelect(item)}></RewardsItem>
                )}
            ></FlatList >
        </View>
    )
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

export default RewardsScreen