import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Chip from '../components/Chip'

const TaskItem = props => {
    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.image,
                    }}
                />
            </View>
            <View style={styles.content}>
                <Text>{props.offerName}</Text>
                <Text>{props.offerDescription}</Text>
            </View>
            <View style={styles.amount}>
                <Chip text={"+" + props.offerAmount} line></Chip>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    main: { flex: 1, flexDirection: 'row', minHeight: 50, justifyContent: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black' },
    imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    image: { height: '90%', width: '90%', borderRadius: 20 },
    content: { flex: 3 },
    amount: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
export default TaskItem