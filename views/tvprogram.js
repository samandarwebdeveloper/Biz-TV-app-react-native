import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

import AllPrograms from './allPrograms';
import Programs from './programs';



const Tab = createMaterialTopTabNavigator();

export default function TvProgram() {
  return (<View style={{paddingTop: 35, flex: 1}}>
    <Tab.Navigator 
        tabBarOptions={{
        activeTintColor: '#FF4C98',
        inactiveTintColor: '#000',
        indicatorStyle: { backgroundColor: '#FF4C98' },
        labelStyle: {
            fontSize: 13,
            textTransform: 'none'
        }
        }}
        >
        <Tab.Screen name="Barchasi" component={AllPrograms} />
        <Tab.Screen name="Ko'rsatuvlar" component={Programs} />
        </Tab.Navigator>
        </View>
    );
}
