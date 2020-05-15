import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

const TutorialSlider = props => {
    return (

        <AppIntroSlider renderItem={({ item }) => {
            return (<SafeAreaView style={{ backgroundColor: item.backgroundColor, flex: 1, }}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </SafeAreaView>)
        }} data={slides} onDone={props.onDone} bottomButton />)
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 320,
        height: 320,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        marginHorizontal: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
});


const slides = [
    {
        key: "1",
        title: 'Complete Tasks',
        image: require('../assets/images/intro-people.png'),
        text: 'Use your device to complete one of the several tasks available in the app',
        backgroundColor: '#59b2ab',
    },
    {
        key: "2",
        title: 'Collect Credits',
        text: 'Collect credits by completeing tasks. Save for big rewards! ',
        image: require('../assets/images/intro-house.png'),
        backgroundColor: '#2f6378',
    },
    {
        key: "3",
        title: 'Get Paid',
        text: 'Redeem your coins for real giftcards and payouts!',
        image: require('../assets/images/intro-wallet.png'),
        backgroundColor: '#59b2ab',
    }
];

export default TutorialSlider