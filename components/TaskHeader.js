import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ShadowPropTypesIOS } from 'react-native'

import Card from './Card'
import Chip from './Chip'

const TaskItem = props => {
    return (
        <View>
            <Card style={styles.content}>
                <Text style={styles.text}>Welcome, {props.userData.username}!</Text>
                <Text style={styles.text}>You currently have {props.userData.balance} coins</Text>
                <Text style={styles.text}>Happy earning!</Text>

            </Card>
            <View>
                <Text style={styles.tasksText}>Available Tasks</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: { marginTop: 10, alignItems: 'center', justifyContent: 'space-around', minHeight: 100, },

    text: { fontFamily: 'Avenir', fontSize: 18 },
    tasksText: { fontWeight: 'bold', fontFamily: 'Avenir', fontSize: 20 }
})
export default TaskItem