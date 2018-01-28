import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';
import AppNavigation from "./js/common/Navigation";
export default class App extends Component<{}> {
    render() {
        return (
            <AppNavigation/>
        );
    }
}