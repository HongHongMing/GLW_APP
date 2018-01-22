import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import StateScreen_detail from './StateScreen_detail'
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2


const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const StateScreenTabs = TabNavigator({
    StateScreen_detail: {
        screen: StateScreen_detail,
        navigationOptions: {
            tabBarLabel: '设备详情',
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
            tabBarLabel: '设备故障记录',
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
    initialRouteName:'StateScreen_detail',
    backBehavior:'none',
    tabBarOptions: {
        labelStyle: {
            margin: 0,
            padding: 0,
            fontSize: 16,
        },
        style: {
            margin: 0,
            padding: 0,
            borderTopColor: "#C8C8CF",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderBottomColor: "#191F25",
            backgroundColor: "#ffffff",
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'#3396FB'
        },
        activeBackgroundColor:'white',
        activeTintColor:'#3396FB',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#191F25',
        pressColor: "#C8C8CF",
        pressOpacity: 0.3,
        showLabel: true,
        upperCaseLabel: false,
    },
});

export default StateScreenTabs;