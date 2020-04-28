import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import TaskScreen from '../screens/TaskScreen';
import TaskStack from '../stacks/TaskStack';
import RewardsStack from '../stacks/RewardsStack'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {

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
        name="Balance"
        component={LinksScreen}
        options={{
          title: 'Balance',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardsStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-gift" />,
        }}
      />
    </BottomTab.Navigator>
  );
}