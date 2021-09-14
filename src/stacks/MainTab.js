import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
                                
export default () => (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        activetTintColor:'blue',
        inactiveTintColor:'red',
        labelStyle:{fontSize: 20}
    }}  initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
);