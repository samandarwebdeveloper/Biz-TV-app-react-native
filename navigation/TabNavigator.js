import React, { createRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import TV from '../views/tv';
import News from '../views/news';
import TvProgram from '../views/tvprogram';

import { AnotherStackNavigator } from './StakNavigator';

const Tab = createBottomTabNavigator();

export default function Sidebar() {

  return (
    <Tab.Navigator  screenOptions={{
      tabBarActiveTintColor: '#E1084D',
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#fff',
            height: 74,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
            paddingBottom: 25,
            marginTop: -10,
        },
    }}>
      <Tab.Screen name="biz tv" options={{
        tabBarIcon: ({ color }) => (
            <Image source={require('../assets/tv.png')} style={{ width: 22.93, height: 21.17, tintColor: color }} />
        ),
      }} component={TV} />
      <Tab.Screen name="yangiliklar" options={{
        tabBarIcon: ({ color }) => (
            <Image source={require('../assets/news.png')} style={{ width: 21.81, height: 16.61, tintColor: color }} />
        ),
      }} component={News} />
      <Tab.Screen name="ko'rsatuvlar" options={{
        tabBarIcon: ({ color }) => (
            <Image source={require('../assets/tvprogram.png')} style={{ width: 20.45, height: 20.45, tintColor: color }} />
        ),
      }} component={TvProgram} />
      <Tab.Screen name="boshqa" options={{
          tabBarVisible: false,
        tabBarIcon: ({ color }) => (
            <Image source={require('../assets/dots.png')} style={{ width: 17.72, height: 5.06, tintColor: color }} />
        ),
      }} component={AnotherStackNavigator} />
    </Tab.Navigator>
  );
}