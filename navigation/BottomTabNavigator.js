import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';


import { useSelector, useDispatch } from 'react-redux'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TaskStack from '../stacks/TaskStack';
import RewardsStack from '../stacks/RewardsStack'
import AccountStack from '../stacks/AccountStack'
import AuthScreen from '../screens/AuthScreen'

import TutorialSlider from '../components/TutorialSlider'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {

  const [introShowing, setIntroShowing] = React.useState(true)

  const userToken = useSelector(state => state.auth.token)



  if (!userToken && introShowing) {

    return (
      <TutorialSlider onDone={() => setIntroShowing(false)}></TutorialSlider>
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


