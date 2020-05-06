import React from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Separator, Thumbnail, Left, Body, Right, Button } from 'native-base';


const PageHeader = props => {
    return (<ListItem thumbnail>
        <Left>
            <Thumbnail square source={{ uri: 'https://hedgebetcalculator.com/services/public/img/profile.png' }} />
        </Left>
        <Body>
            <Text>{props.username}</Text>
            <Text note numberOfLines={1}>Balance: {props.balance}</Text>
        </Body>
        <Right>
            <Button transparent>
                <Text>Refresh</Text>
            </Button>
        </Right>
    </ListItem>)
}

export default PageHeader