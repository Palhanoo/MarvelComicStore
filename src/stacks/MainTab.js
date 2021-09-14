import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

import HomeIcon from '../components/HomeIcon';
import TabBarIcon from '../components/TabBarIcon';


export default () => (
    <Tab.Navigator 
        screenOptions={({route})=>({
        headerShown:false,
        labelStyle:{fontSize: 20},
        tabBarActiveTintColor:'#000',
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{backgroundColor: '#526180'},  
        tabBarIcon:() => <TabBarIcon name={route.name}/>
    })} initialRouteName="Home">
        
        <Tab.Screen name="Home" component={Home}/>

        <Tab.Screen name="Favorites" component={Favorites}/>
        
    </Tab.Navigator>
);