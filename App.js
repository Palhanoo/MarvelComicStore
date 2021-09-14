import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

import { store, persistor } from './src/store';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}