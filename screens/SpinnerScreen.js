import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text, Modal, Image } from 'react-native';
import Roulette from 'react-native-casino-roulette'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'native-base'

import * as UserDataActions from '../store/actions/userData'

import PageHeader from '../components/PageHeader'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';


const SpinnerScreen = props => {
    const userToken = useSelector(state => state.auth.token);
    const userData = useSelector(state => state.user)
    const [ableToSpin, setAbleToSpin] = useState(false)
    const [spinToValue, setSpinToValue] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)

    const dispatch = useDispatch();


    const numbers = [1, 0, 1, 0, 1, 0, 1, 0, 2, 0]
    const options = numbers.map((o) => ({ index: o }))
    const customOptions = numbers.map((o) => (
        <Text style={{ color: 'white', fontSize: 18 }} index={o}>{o ? "+1" : 0}</Text>
    ));

    const showVideoAd = async () => {
        try {
            await AdMobRewarded.setAdUnitID('ca-app-pub-2960114332907260/4994713443'); // Test ID, Replace with your-admob-unit-id
            await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true, additionalRequestParams: { userID: '696969' } });
            await AdMobRewarded.showAdAsync();
        } catch (error) {
            console.log(error)
            setModalVisible(true)
        }
    }

    const getRewardedForAd = () => {
        fetch('https://hedgebetcalculator.com/services/wheel', {
            method: 'POST', headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: userToken,
            },
            // body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then((json) => {
                if (json) {
                    setAbleToSpin(true)
                    setSpinToValue(json.amount + 1)
                }
            }).catch(err => console.log(err))

    }


    useEffect(() => AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', (info) => {
        console.log(info)
        getRewardedForAd()

    }), [])


    return (<View style={{ flex: 1 }}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            }}
        >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10, textAlign: 'center' }}>Sorry, no ads available! Please check back later!</Text>
                    <Button full rounded onPress={() => {
                        setModalVisible(false);
                        // navigation.goBack()
                    }}>
                        <Text style={styles.textStyle}>OK</Text>
                    </Button>
                </View>
            </View>
        </Modal>
        <PageHeader username={userData.username} balance={userData.balance}></PageHeader>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

            <Text>Win Coins</Text>
            <Roulette
                enableUserRotate={ableToSpin}
                onFinishRotate={() => {
                    setAbleToSpin(false)
                    dispatch(UserDataActions.refreshUser(userToken))
                }}
                distance={110}
                spinToIndex={spinToValue}
                turns={5}
                // markerTop={-10}
                // onRotate={e => console.log(e)}
                background={require('../assets/images/spinner.png')}
                marker={require('../assets/images/marker.png')}
                options={customOptions}
                rotateEachElement={(index) => ((index * 360 / options.length * -1) - 90)}
                markerWidth={20} >

            </Roulette>
            <View style={{ width: '80%', marginVertical: 16 }}>
                {ableToSpin ?
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Tap to Spin Wheel!</Text>
                    : <Button full rounded onPress={() => { showVideoAd() }}>
                        <Text style={styles.textStyle}>Watch Video To Spin!</Text>
                    </Button>}
            </View>
            <View style={{}}>
                <AdMobBanner
                    bannerSize='fullBanner'
                    adUnitID="ca-app-pub-2960114332907260/9478444434" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={() => { console.log("Couldn't load ad banner") }} />
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    top: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: 10 },
    bottom: { flex: 3, padding: 10 },
    imageContainer: { height: 100, width: 100, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', flex: 1 },
    image: { height: '100%', width: '100%', borderRadius: 20 },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginVertical: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})

export default SpinnerScreen