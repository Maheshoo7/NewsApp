/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from './src/store';
import Home from './src/screens/Home';
import Header from './src/components/Header';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#191717',
  };

  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Header />
          <Home />
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
