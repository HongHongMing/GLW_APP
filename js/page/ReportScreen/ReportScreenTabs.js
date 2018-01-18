import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {ReportScreen} from './ReportScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2


const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);
const productionScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>production Screen</Text>
    </View>
);

const ReportScreenTabs = TabNavigator({
    ReportScreen: {
        screen: ReportScreen,
        navigationOptions: {
            tabBarLabel: '台账',
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
        labelStyle: {
            margin: 0,
            padding: 0,
            fontSize: 16,
        },
        style: {
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