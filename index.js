/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import configureAxios from './src/utls/helperFunction'
 import { Provider } from 'react-redux';
 import store from './src/redux/store';
 const ConnectedApp=()=> (<Provider store={store}>
    <App/>
 </Provider>
 );
configureAxios;
AppRegistry.registerComponent(appName, () => ConnectedApp);
