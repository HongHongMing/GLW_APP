import React, {Component} from 'react';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {Parameter} from './Parameter'
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import NavigationBar from '../../common/NavigationBar';
import AppNavigation from '../../../js/common/Navigation'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>production Screen</Text>
    </View>
);
const productionScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>production Screen</Text>
    </View>
);

const ReportScreenTabs = TabNavigator({
    ReportScreen: {
        screen: Parameter,
        navigationOptions: {
            headerTitle:'数据报表',
            tabBarLabel: '台账',
            headerRight:<View/>,
            headerLeft:<View/>,
            headerStyle:{
                shadowOpacity:0,
                elevation: 0
            },
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: '记录',
            headerTitle:'数据报表',
            headerRight:<View/>,
            headerLeft:<View/>,
            headerStyle:{
                shadowOpacity:0,
                elevation: 0
            },
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    production: {
    screen: productionScreen,
        navigationOptions: {
        tabBarLabel: '生产',
            headerTitle:'数据报表',
            headerRight:<View/>,
            headerLeft:<View/>,
            headerStyle:{
                shadowOpacity:0,
                elevation: 0
            },
            tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-person' : 'ios-person-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
},
},{

    tabBarPosition:'top',
    lazy: true,
    initialRouteName:'ReportScreen',
    backBehavior:'none',
    tabBarOptions: {
        style: {
            shadowOpacity:0,
            elevation: 0,
            margin: 0,
            padding: 0,
            borderTopColor: "#3396FB",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderBottomColor: "#C8C8CF",
            backgroundColor: "#3396FB",
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'#ffffff',
            paddingLeft:20,
            paddingRight:20
        },
        activeBackgroundColor:'white',
        activeTintColor:'#ffffff',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#ffffff',
        pressColor: "#C8C8CF",
        pressOpacity: 0.3,
        showLabel: true,
        upperCaseLabel: false,
    },
});
export default ReportScreenTabs;