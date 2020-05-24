import React, { useState } from 'react'
import { View, StyleSheet, Image, Modal } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { useSelector } from 'react-redux'
import ConfettiCannon from 'react-native-confetti-cannon';

const TaskDetailScreen = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const userToken = useSelector(state => state.auth.token);
    const redeemReward = (item) => {
        fetch('https://hedgebetcalculator.com/services/redeem', {
            method: 'POST', headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: userToken,
            },
            body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then((json) => {
                if (json === 'success') {
                    setModalVisible(true)
                }
            }).catch(err => console.log(err))
    }

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}
            >

                <View style={styles.centeredView}>
                    <ConfettiCannon count={150} origin={{ x: 0, y: -200 }} fallSpeed={4000} />
                    <View style={styles.modalView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Reward Redeemed!</Text>
                        <Text style={{ textAlign: 'center', marginVertical: 15 }}>You will be notified when your reward is sent to your Reward History!</Text>
                        <Button full rounded onPress={() => {
                            setModalVisible(false);
                            navigation.goBack()
                        }}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'https://hedgebetcalculator.com/services/public/img/profile.png' }} />
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>{route.params.title}</Text>
                                <Text note>{new Date().toLocaleString()}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: route.params.image }} style={{ height: 150, width: '100%', flex: 1, alignSelf: 'center', overflow: 'hidden', borderRadius: 10, resizeMode: 'contain' }} />
                        </Body>
                    </CardItem>
                    <CardItem style={{ justifyContent: 'center' }}>
                        <Button onPress={() => redeemReward(route.params)}>
                            <Text>Redeem Reward!</Text>
                            <Icon name="ios-arrow-forward" />
                        </Button>
                    </CardItem>
                </Card>
            </Content>

        </View >
    )

}

const styles = StyleSheet.create({
    main: { flex: 1 },
    top: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: 10 },
    bottom: { flex: 3, padding: 10 },
    imageContainer: { height: 100, width: 100, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', flex: 1 },
    image: { height: '100%', width: '100%', borderRadius: 20 },
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


    descriptionTitle: { fontWeight: '600', fontSize: 17 }
})
export default TaskDetailScreen