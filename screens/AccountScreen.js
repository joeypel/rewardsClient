import React, { useState, useEffect, } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight, Linking, Modal, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, List, ListItem, Text, Separator, Thumbnail, Left, Body, Right, Button, Icon } from 'native-base';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';


import PageHeader from '../components/PageHeader'

import * as UserDataActions from '../store/actions/userData'
import * as OfferActions from '../store/actions/offers'

const AccountScreen = props => {
    const userToken = useSelector(state => state.auth.token)
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [unhideModalVisible, setUnhideModalVisible] = useState(false);

    useEffect(() => {
        dispatch(UserDataActions.refreshUser(userToken))//
    }, [])


    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const logOutUser = () => {
        dispatch(UserDataActions.logOutUser())
    }

    const unhideOffers = () => {
        dispatch(OfferActions.unhideAllOffers())
    }



    if (userToken) {
        return (

            <Content>

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
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Really log out?</Text>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Nevermind</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#FF9933" }}
                                onPress={() => {
                                    logOutUser()
                                }}
                            >
                                <Text style={styles.textStyle}>Log Out</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={unhideModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingVertical: 15 }}>Do you really want to unhide every offer?</Text>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setUnhideModalVisible(!unhideModalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Nevermind</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#FF9933" }}
                                onPress={() => {
                                    unhideOffers()
                                    setUnhideModalVisible(!unhideModalVisible)
                                }}
                            >
                                <Text style={styles.textStyle}>Yes, unhide!</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <PageHeader username={userData.username} balance={userData.balance}></PageHeader>
                <Separator bordered>
                    <Text>Your Account</Text>
                </Separator>
                <ListItem onPress={() => props.navigation.navigate('Earnings', { userToken: userToken })}>
                    <Left>
                        <Text>Earning History</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem onPress={() => props.navigation.navigate('Rewards', { userToken: userToken })}>
                    <Left>
                        <Text>Rewards History</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                {/* <ListItem>
                    <Left>
                        <Text>Refer a Friend!</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>

                </ListItem > */}
                <ListItem onPress={() => { setUnhideModalVisible(true) }}>
                    <Left>
                        <Text>Unhide Offers</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem last onPress={() => { toggleModal() }}>
                    <Left>
                        <Text>Log Out</Text>
                    </Left>
                    <Right>
                        <Icon name="ios-log-out" />
                    </Right>
                </ListItem>
                <AdMobBanner
                    bannerSize='fullBanner'
                    adUnitID="ca-app-pub-2960114332907260/9893377403" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={() => { console.log("Couldn't load ad banner") }} />
                <Separator bordered>
                    <Text>Information</Text>
                </Separator>
                <ListItem onPress={() => props.navigation.navigate('HowItWorks')}>
                    <Text>How it Works</Text>
                </ListItem>
                <ListItem onPress={() => props.navigation.navigate('Privacy')}>
                    <Text>Privacy Policy</Text>
                </ListItem>
                <ListItem onPress={() => props.navigation.navigate('Terms')}>
                    <Text>Terms of Service</Text>
                </ListItem>
                <ListItem last onPress={() => Linking.openURL("mailto:techforsure@gmail.com")}>
                    <Left>
                        <Text>Contact Us!</Text>
                    </Left>
                    <Right>
                        <Icon name="mail" />
                    </Right>
                </ListItem>
            </Content>

        )
    }
    else {
        return (

            <View>
                <Text>It looks like you're not signed in:</Text>
                <Button title="Log in" onPress={() => { props.navigation.navigate('Auth') }}></Button>
                {/* <Button title="Sign Up"></Button> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
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
    }
});

export default AccountScreen
