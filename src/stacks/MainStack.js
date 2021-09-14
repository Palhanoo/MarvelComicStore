import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ComicArea from '../pages/ComicArea';
import Checkout from '../pages/Checkout';


import MainTab from './MainTab';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#252531'
        },
        headerTintColor: '#DCDCDC',
    }}>
        
        <MainStack.Screen name="ComicStore" component={MainTab}/>

        <MainStack.Screen name="ComicArea" component={ComicArea}/>

        <MainStack.Screen name="Checkout" component={Checkout}/>
    </MainStack.Navigator>
)