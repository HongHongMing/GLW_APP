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
    Text, Platform
} from 'react-native';
const createStyle = require('../../util/StyleSheet');//引用安卓苹果控制样式
const newStyles = createStyle.create({//自定义创建样式分类
    tabStyle: {
        ios: {
            height: 35,
        },
        android: {},
    }
});
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
const NAV_BAR_HEIGHT_IOS = 35;
const NAV_BAR_HEIGHT_ANDROID = 50;
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
            }
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
            color:'',
            borderTopColor: "#3396FB",
            borderTopWidth: 0,
            borderBottomWidth: 0.5,
            borderBottomColor: "#C8C8CF",
            backgroundColor: "#3396FB",
            fontSize:20,
        },
        tabStyle: newStyles.tabStyle,
        labelStyle: {
            fontSize: 16,
            margin: 1
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'#3396FB',
            paddingLeft:20,
            paddingRight:20,
        },
        activeBackgroundColor:'#3396FB',
        activeTintColor:'#ffffff',
        inactiveBackgroundColor:'#3396FB',
        inactiveTintColor:'#C8C8CF',
        pressColor: "#C8C8CF",
        pressOpacity: 0.3,
        showLabel: true,
        showIcon: false,
        upperCaseLabel: false,
    },
});
const tabStyleHeight = Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS:0;
export default ReportScreenTabs;