import React, { useState, useEffect, } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight, Linking } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, List, ListItem, Text, Separator, Thumbnail, Left, Body, Right, Button } from 'native-base';

import PageHeader from '../components/PageHeader'

import * as UserDataActions from '../store/actions/userData'

const AccountScreen = props => {
    const userToken = useSelector(state => state.auth.token)
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserDataActions.refreshUser(userToken))//
    }, [])

    if (userToken) {
        console.log(userData)
        // dispatch(UserDataActions.refreshUser(userToken))//
        return (
            <Content>
                <PageHeader username={userData.username} balance={userData.balance}></PageHeader>
                <Separator bordered>
                    <Text>Your Account</Text>
                </Separator>
                <ListItem>
                    <Text>Earning History</Text>
                </ListItem>
                <ListItem>
                    <Text>Refer a Friend!</Text>
                </ListItem>
                <ListItem last onPress={() => { console.log("Log out") }}>
                    <Text>Log Out</Text>
                </ListItem>
                <Separator bordered>
                    <Text>Information</Text>
                </Separator>
                <ListItem>
                    <Text>How it Works</Text>
                </ListItem>
                <ListItem>
                    <Text>Privacy Policy</Text>
                </ListItem>
                <ListItem>
                    <Text>Terms of Service</Text>
                </ListItem>
                <ListItem last onPress={() => Linking.openURL("mailto:support@example.com")}>
                    <Text>Contact us! </Text>
                </ListItem>
            </Content>
        )
    }
    else {
        return (

            <View>
                <Text>It looks like you're not signed in:</Text>
                <Button title="Log in" onPress={() => { props.navigation.navigate('Auth') }}></Button>
                <Button title="Sign Up"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create()

export default AccountScreen
