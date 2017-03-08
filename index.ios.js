/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import App from './app/App';

global.__APP__ = true;
global.__ANDROID__ = false;
global.__IOS__ = true;

export default class RNRouterDemo extends Component {
    render() {
        return <App/>;
    }

}

AppRegistry.registerComponent('RNRouterDemo', () => RNRouterDemo);
