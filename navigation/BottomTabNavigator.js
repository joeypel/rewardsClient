import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

import { useSelector, useDispatch } from 'react-redux'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TaskStack from '../stacks/TaskStack';
import RewardsStack from '../stacks/RewardsStack'
import AccountStack from '../stacks/AccountStack'
import AuthScreen from '../screens/AuthScreen'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {

  const [introShowing, setIntroShowing] = React.useState(true)

  const userToken = useSelector(state => state.auth.token)



  if (!userToken && introShowing) {
    // return (<AuthScreen></AuthScreen>)
    return (
      <AppIntroSlider renderItem={({ item }) => {
        console.log(item)
        return (<View style={{ backgroundColor: item.backgroundColor, flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>)
      }} data={slides} onDone={() => setIntroShowing(false)} />
    )

  }
  else if (!userToken) {
    return (<AuthScreen></AuthScreen>)
  }

  else {
    return (
      <BottomTab.Navigator initialRouteName="Tasks">
        <BottomTab.Screen
          name="Tasks"
          component={TaskStack}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
        />
        <BottomTab.Screen
          name="Rewards"
          component={RewardsStack}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-gift" />,
          }}
        />
        <BottomTab.Screen
          name="Account"
          component={AccountStack}
          options={{
            title: 'Account',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-person" />,
          }}
        />

      </BottomTab.Navigator>
    );
  }

}

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

const styles = StyleSheet.create({})