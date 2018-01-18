/**
 *
 * Copyright 2017-present whcapp
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * https://github.com/netyouli/whcapp
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { Component } from "react";
import { View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Launch from '../../js/page/launch/launch';
import Tabbar from  '../../js/common/Tabbar';
import StateScreen_tab  from '../../js/page/StateScreen/StateScreen_tab'
import AlarmScreen_detail from '../../js/page/AlarmScreen/AlarmScreen_detail'
import {AlarmFilter} from '../../js/page/AlarmScreen/AlarmFilter'
import BanBie from '../../js/page/ReportScreen/BanBie'
import {ReportScreen} from '../../js/page/ReportScreen/ReportScreen'
import ReportScreenTabs from '../../js/page/ReportScreen/ReportScreenTabs'
const AppNavigation  = StackNavigator({
    Launch: {
        screen: Launch,
    },
    Tabbar: {
        screen: Tabbar,
    },
    StateScreen_tab: {
        screen:StateScreen_tab,
    },
    AlarmScreen_detail: {
        screen:AlarmScreen_detail,
    },
    AlarmFilter:{
        screen:AlarmFilter
    },
    BanBie:{
        screen:BanBie
    },
    ReportScreen:{
        screen:ReportScreen
    },
    ReportScreenTabs:{
        screen:ReportScreenTabs,
    }
},{
    initialRouteName:'Launch', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerBackTitle:'返回',  // 左上角返回键文字
        headerStyle: {
            backgroundColor: '#3396FB'
        },
        headerRight:<View/>,
        // headerLeft:<View/>,
        headerTitleStyle: { fontSize: 18, alignSelf: "center", color: "#ffffff" },
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调

});


export default AppNavigation;
