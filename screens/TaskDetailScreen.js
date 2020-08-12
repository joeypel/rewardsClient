import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

import * as offerActions from '../store/actions/offers'
import Chip from '../components/Chip'
import { useSelector, useDispatch } from 'react-redux'

const TaskDetailScreen = ({ navigation, route, hideOfferHandler }) => {
    const dispatch = useDispatch();
    const [hidden, setIsHidden] = useState(false);
    const handleTaskStartPress = async url => {
        let newURL = url.replace('[USER_ID]', route.params.userData.userID).replace('{playerid}', route.params.userData.userID)
        Linking.openURL(newURL)
        // console.log(newURL)
    }
    console.log(route.params.taskData)
    return (
        <Content>
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://hedgebetcalculator.com/services/public/img/profile.png' }} />
                        <Body>
                            <Text style={{ fontWeight: 'bold' }}>{route.params.taskData.offer_name}</Text>

                            <Text note>+{route.params.taskData.amount} Coins</Text>
                            <Text note>{new Date().toUTCString().slice(0, 16)}</Text>
                        </Body>
                        <Right>
                            {hidden ? <TouchableOpacity onPress={() => {
                                setIsHidden(false);
                                dispatch(offerActions.unhideOffer(route.params.taskData.offer_name))
                            }}>
                                <Text note>Unhide Offer</Text>
                            </TouchableOpacity> : <TouchableOpacity onPress={() => {
                                setIsHidden(true);
                                dispatch(offerActions.addHiddenOffer(route.params.taskData.offer_name))
                            }}>
                                    <Text note>Hide Offer</Text>
                                </TouchableOpacity>}
                        </Right>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image source={{ uri: route.params.taskData.image_url_220x124 }} style={{ height: 150, width: 150, flex: 1, alignSelf: 'center', overflow: 'hidden', borderRadius: 10 }} />
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text>{route.params.taskData.offer_desc}</Text>
                        <Text style={styles.descriptionTitle}>Instructions</Text>
                        <Text>{route.params.taskData.call_to_action}</Text>
                        {route.params.taskData.disclaimer ? (<View><Text style={styles.descriptionTitle}>Disclaimer</Text><Text>{route.params.taskData.disclaimer}</Text></View>) : null}
                    </Body>
                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>
                    <Button onPress={() => handleTaskStartPress(route.params.taskData.offer_url)}>
                        <Text>Start Offer</Text>
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </CardItem>
            </Card>
        </Content>
    )

}

const styles = StyleSheet.create({
    main: { flex: 1 },
    top: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: 10 },
    bottom: { flex: 3, padding: 10 },
    imageContainer: { height: 100, width: 100, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', flex: 1 },
    image: { height: '100%', width: '100%', borderRadius: 20 },



    descriptionTitle: { fontWeight: '600', fontSize: 17 }
})
export default TaskDetailScreen