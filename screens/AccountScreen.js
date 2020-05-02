import React, { useState, useEffect, } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import * as UserDataActions from '../store/actions/userData'

const AccountScreen = props => {
    const userToken = useSelector(state => state.auth.token)
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(UserDataActions.refreshUser(userToken))//
    // }, [])

    if (userToken) {
        console.log(userData)
        // dispatch(UserDataActions.refreshUser(userToken))//
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>{userData.username}</Text>
                <Text>{userData.balance}</Text>
                <Text>How it works</Text>
                <Text>Log Out</Text>
                <Text></Text>
                <Text>Terms of Service</Text>
                <Text>Privacy Policy</Text>
            </View>
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

export default AccountScreen
