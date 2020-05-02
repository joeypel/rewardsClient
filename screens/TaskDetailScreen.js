import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Button, Linking } from 'react-native'

import Chip from '../components/Chip'


const TaskDetailScreen = ({ navigation, route }) => {
    console.log(route.params)

    const handleTaskStartPress = async url => {

        Linking.openURL(url.replace('{playerid}', route.params.userData.userID))
        // console.log(url)
    }
    console.log(route.params.taskData.icon)

    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: route.params.taskData.icon,
                        }}
                    />
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}><Text>{route.params.taskData.name}</Text>
                    <Chip text={"+" + route.params.taskData.amount}></Chip></View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text>{route.params.taskData.description}</Text>
                <Text style={styles.descriptionTitle}>Instructions</Text>
                <Text>{route.params.taskData.instructions}</Text>
                <Button title="Start Task" onPress={() => handleTaskStartPress(route.params.taskData.tracking_url)}></Button>
            </View>
        </View >
    )
    // return (<View><Text>{JSON.stringify(props.route.params)}</Text></View>)
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    top: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth },
    bottom: { flex: 3, padding: 10 },
    imageContainer: { height: 100, width: 100, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    image: { height: '100%', width: '100%', borderRadius: 20 },



    descriptionTitle: { fontWeight: '600', fontSize: 17 }
})
export default TaskDetailScreen