import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ShadowPropTypesIOS } from 'react-native'

import Chip from '../components/Chip'

const TaskItem = props => {
    return (
        <TouchableOpacity style={styles.main} onPress={props.onPress}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.image,
                    }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.offerName}>{props.offerName}</Text>
                <Text numberOfLines={2}>{props.offerDescription}</Text>
            </View>
            <View style={styles.amount}>
                <Chip text={"+" + props.offerAmount} ></Chip>
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    main: { paddingVertical: 8, flex: 1, flexDirection: 'row', minHeight: 50, justifyContent: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black' },
    imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    image: { height: '90%', width: '90%', borderRadius: 20 },
    content: { flex: 3 },
    amount: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    offerName: { fontWeight: 'bold', fontSize: 16 }
})
export default TaskItem