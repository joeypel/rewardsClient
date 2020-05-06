import React, { useState, useEffect, } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button, TouchableHighlight } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

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
            <View >
                <View style={styles.top}>
                    <View><Text style={styles.username}>{userData.username}</Text>
                        <Text style={styles.coins}>{userData.balance} Coins</Text>
                    </View>
                    <TouchableOpacity>

                        <Ionicons
                            name={'ios-refresh'}
                            size={30}
                            color={'black'}
                            style={{ paddingLeft: 20, paddingRight: 15 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuItem}><Ionicons
                        name={'ios-information-circle-outline'}
                        size={30}
                        color={'black'}
                        style={{ paddingLeft: 20, paddingRight: 15 }}
                    /><Text>How it works</Text></View>

                    <View style={styles.menuItem}><Ionicons
                        name={'md-paper'}
                        size={30}
                        color={'black'}
                        style={{ paddingLeft: 20, paddingRight: 15 }}
                    /><Text>Terms of Service</Text></View>

                    <View style={styles.menuItem}><Ionicons
                        name={'ios-lock'}
                        size={30}
                        color={'black'}
                        style={{ paddingLeft: 20, paddingRight: 15 }}
                    /><Text style={styles.menuText}>Privacy Policy</Text></View>

                    {/* <TouchableOpacity> */}
                    <View style={styles.menuItem}>
                        <Ionicons
                            name={'ios-log-out'}
                            size={30}
                            color={'black'}
                            style={{ paddingLeft: 20, paddingRight: 15, }}
                        />

                        <Text style={styles.menuText}>Log Out</Text>
                    </View>
                    {/* </TouchableOpacity> */}
                </View>
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

const styles = StyleSheet.create({
    top: { flexDirection: 'row', minHeight: 100, alignItems: 'center', justifyContent: 'center', borderBottomWidth: StyleSheet.hairlineWidth },
    username: { fontSize: 20, fontWeight: 'bold' },
    coins: { fontSize: 18 },
    menu: { minHeight: 200, alignItems: 'flex-start', justifyContent: 'space-evenly' },
    menuItem: { flexDirection: 'row', alignItems: 'center', },
    menuText: { flex: 1 }
})

export default AccountScreen
