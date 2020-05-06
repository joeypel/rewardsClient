import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ShadowPropTypesIOS } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Badge } from 'native-base';


import Chip from '../components/Chip'

const TaskItem = props => {
    // return (
    //     <TouchableOpacity style={styles.main} onPress={props.onPress}>
    //         <View style={styles.imageContainer}>
    //             <Image
    //                 style={styles.image}
    //                 source={{
    //                     uri: props.image,
    //                 }}
    //             />
    //         </View>
    //         <View style={styles.content}>
    //             <Text numberOfLines={1} style={styles.offerName}>{props.offerName}</Text>
    //             <Text numberOfLines={2} style={styles.description}>{props.offerDescription}</Text>
    //         </View>
    //         <View style={styles.amount}>
    //             <Chip text={"+" + props.offerAmount} ></Chip>
    //         </View>
    //     </TouchableOpacity>)
    return (

        <ListItem thumbnail onPress={props.onPress}>
            <Left>
                <Thumbnail large source={{ uri: props.image }} />
            </Left>
            <Body>
                <Text>{props.offerName}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }} numberOfLines={2}>{props.offerDescription}</Text>
            </Body>
            <Right>
                <Badge info>
                    <Text style={{ fontWeight: 'bold' }}>{"+" + props.offerAmount}</Text>
                </Badge>
            </Right>
        </ListItem>

    )
}

const styles = StyleSheet.create({
    main: { paddingVertical: 8, flex: 1, flexDirection: 'row', minHeight: 50, justifyContent: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black', minHeight: 80 },
    imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    image: { height: '90%', width: '90%', borderRadius: 20 },
    content: { flex: 3 },
    amount: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    description: { color: 'gray', fontSize: 12 },
    offerName: { fontWeight: 'bold', fontSize: 16 }
})
export default TaskItem