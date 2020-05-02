import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ShadowPropTypesIOS } from 'react-native'

import Chip from './Chip'

const TaskItem = props => {
    return (
        <View style={styles.content}>
            <Text>{props.userData.balance}</Text>
            <Text>{props.offerDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: { marginVertical: 10 }
})
export default TaskItem