/**
 * @format
 */
import React from 'react';
import {AppRegistry, SafeAreaView, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import {PersistGate} from 'redux-persist/lib/integration/react';
const {store, persistor} = configureStore();

const BlithchronApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView
          style={{flex: 1}}
          forceInset={{top: 'never', bottom: 'never'}}>
          <App />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => BlithchronApp);
