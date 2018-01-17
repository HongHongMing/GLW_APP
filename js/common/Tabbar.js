import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {StateScreen} from '../../js/page/StateScreen/StateScreen';
import {AlarmList} from '../../js/page/AlarmScreen/AlarmList';
import {ReportScreen} from '../../js/page/ReportScreen/ReportScreen';
import {MineScreen} from '../../js/page/MineScreen/MineScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

const Tabbar = TabNavigator({
    State: {
        screen: StateScreen,
        navigationOptions: {
            tabBarLabel: '实时状态',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-globe' : 'ios-globe-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Alarm: {
        screen:AlarmList,
        navigationOptions: {
            tabBarLabel: '报警中心',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    Report: {
        screen: ReportScreen,
        navigationOptions: {
            tabBarLabel: '数据报表',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-paper' : 'ios-paper-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    My: {
        screen:MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    }
},{
    tabBarPosition:'bottom',
    swipeEnabled: false,
    scrollEnabled: false,
    animationEnabled: false,
    backBehavior: "none",
    lazy: true,
    tabBarOptions: {
        labelStyle: {
            margin: 0,
            padding: 0,
            fontSize: 12,
        },
        style: {
            margin: 0,
            padding: 0,
            height: 50,
            borderTopColor: "#e5e5e5",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderBottomColor: "blue",
            backgroundColor: "#ffffff",
        },
        activeBackgroundColor:'white',
        activeTintColor:'#488aff',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#54504e',
        pressColor: "#e5e5e5",
        pressOpacity: 0.3,
        indicatorStyle: {
            height:0,
        },
        showLabel: true,
        showIcon: true,
        upperCaseLabel: false,
    },
});

export default Tabbar;