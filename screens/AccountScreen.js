import React, { useState, useEffect, } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, List, ListItem, Text, Separator, Thumbnail, Left, Body, Right, Button } from 'native-base';

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
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://hedgebetcalculator.com/services/public/img/profile.png' }} />
                        </Left>
                        <Body>
                            <Text>{userData.username}</Text>
                            <Text note numberOfLines={1}>Balance: {userData.balance}</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Refresh</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
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
                <ListItem last>
                    <Text>Terms of Service</Text>
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
