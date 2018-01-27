import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';

import AppNavigation from "./js/common/Navigation";
import SplashScreen from 'react-native-splash-screen';
export default class App extends Component<{}> {
    // componentDidMount() {
    //     SplashScreen.hide(); // 隐藏启动屏
    // }
    render() {
        return (
            <AppNavigation/>
        );
    }
}