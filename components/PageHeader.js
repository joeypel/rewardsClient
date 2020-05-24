import React from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Separator, Thumbnail, Left, Body, Right, Button } from 'native-base';

import { useSelector, useDispatch } from 'react-redux'
import * as UserDataActions from '../store/actions/userData'

const PageHeader = props => {
    const dispatch = useDispatch();
    const userToken = useSelector(state => state.auth.token);
    return (<ListItem thumbnail>
        <Left>
            <Thumbnail square source={{ uri: 'https://hedgebetcalculator.com/services/public/img/profile.png' }} />
        </Left>
        <Body>
            <View><Text numberOfLines={1}>Balance: {props.balance} coins</Text></View>
            <Text note>{props.username}</Text>

        </Body>
        <Right>
            <Button transparent onPress={() => dispatch(UserDataActions.refreshUser(userToken))}>
                <Text>Refresh</Text>
            </Button>
        </Right>
    </ListItem>)
}

export default PageHeader