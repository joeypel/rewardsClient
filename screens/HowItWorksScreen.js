import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TutorialSlider from '../components/TutorialSlider'

const HowItWorksScreen = props => {

    return (
        // <TutorialSlider onDone={props.navigation.goBack()}></TutorialSlider>
        <TutorialSlider onDone={() => { props.navigation.goBack() }}></TutorialSlider>
    )
}

export default HowItWorksScreen