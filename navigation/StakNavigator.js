import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import TV from '../views/tv';
import About from '../views/about';
import Splash from '../views/Splash';
import Another from '../views/another';
import TelePrograms from '../views/teleprograms';
import CurrentNew from '../views/currentNew';
import Channel from '../views/channel';
import ChannelVideo from '../views/video';
import Program from '../views/program';


import BottomTabNavigator from './TabNavigator';


const Stack = createStackNavigator();

const AnotherStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Another" component={Another} options={{headerLeft: (props) => null }} />
            <Stack.Screen name="TV" component={TV} options={{headerLeft: (props) => null }} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Teleprograms" component={TelePrograms} />
            <Stack.Screen name="CurrentNew" component={CurrentNew} />
            <Stack.Screen name="Channel" component={Channel} />
            <Stack.Screen name="ChannelVideo" component={ChannelVideo} />
            <Stack.Screen name="Program" component={Program} />
            <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}


export { AnotherStackNavigator };