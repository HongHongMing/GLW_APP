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

import React , {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    StatusBar,
    TextInput,
    Button
} from 'react-native';

import { NavigationActions } from 'react-navigation';
let formData = new FormData();
class Launch extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            user:'',
            pw:''
        };
    }
    onButtonPress(){
        const {navigate} = this.props.navigation;
            const routeName = 'Tabbar';
            // const reset = NavigationActions.reset({
            //     index: 0,
            //     actions: [NavigationActions.navigate({routeName: 'Tabbar'})]
            // });
            // this.props.navigation.dispatch(reset);

            //登录验证
            // formData = new FormData();
            // formData.append("user_name",this.state.user);
            // formData.append("password",this.state.pw);
            // console.log(formData);
            // this.fetchData().then((response)=>{
            //     console.log(response.code)
            //     if (response.code===0) {
            //         navigate('Tabbar');
            //     }
            // });

            navigate('Tabbar');
    }

    async fetchData() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('http://139.159.212.187:2200/api/gaoliwei/user/token', {
                method: 'POST',
                // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body:formData
            });
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
    _onRefresh() {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }
    componentDidMount() {
        // this.timer = setTimeout(() => {
        //     //const {navigate} = this.props.navigation;
        //     const routeName = 'Tabbar';
        //     const reset = NavigationActions.reset({
        //         index: 0,
        //         actions: [NavigationActions.navigate({routeName: 'Tabbar'})]
        //     });
        //     this.props.navigation.dispatch(reset);
        //     // navigate('Tabbar');
        // }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <View style = {styles.view}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200}}
                    onChangeText={(user) => this.setState({user})}
                    placeholder={"请输入用户名"}
                    value={this.state.user}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200}}
                    onChangeText={(pw) => this.setState({pw})}
                    placeholder={"请输入密码"}
                    secureTextEntry={true}
                    value={this.state.pw}
                />
                <Button
                    onPress={()=>this.onButtonPress()}
                    title="点击登录"
                    color="#841584"
                    accessibilityLabel="Learn more about purple"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Launch;
