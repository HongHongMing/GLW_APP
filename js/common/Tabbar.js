import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {StateScreen} from '../../js/page/StateScreen/StateScreen';
import {AlarmList} from '../../js/page/AlarmScreen/AlarmList';
import ReportScreenTabs from '../../js/page/ReportScreen/ReportScreenTabs';
import {MineScreen} from '../../js/page/MineScreen/MineScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
const Tabbar = TabNavigator({
    My: {
        screen:MineScreen,
        navigationOptions: {
            tabBarLabel: '工作空间',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-desktop' : 'ios-desktop-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
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
    Report: {
        screen: ReportScreenTabs,
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
            height: 56,
            borderTopColor: "#e5e5e5",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderBottomColor: "blue",
            backgroundColor: "#ffffff",
        },
        activeBackgroundColor:'#FFFFFF',
        activeTintColor:'#3396FB',
        inactiveBackgroundColor:'#FFFFFF',
        inactiveTintColor:'#191F25',
        pressColor: "#C8C8CF",
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