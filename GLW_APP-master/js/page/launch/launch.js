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
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import Toast, {DURATION} from 'react-native-easy-toast'
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
        //登录验证
        formData = new FormData();
        formData.append("user_name",this.state.user);
        formData.append("password",this.state.pw);
        console.log(formData);
        this.fetchData().then((response)=>{
            console.log(response.code,response.msg)
            if (response.code===0) {
                const routeName = 'Tabbar';
                const reset = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: 'Tabbar'})]
                });
                this.props.navigation.dispatch(reset);
                navigate('Tabbar');
            }else{
                this.refs.toast.show(response.msg,DURATION.LENGTH_LONG);
            }
        });

        // navigate('Tabbar');
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
    render() {
        return (
            <View style={{width:'100%',height:'100%',backgroundColor:'#f0eff4'}}>
                {/*弹框*/}
                <View>
                    <Toast
                        ref="toast"
                        position='bottom'
                         positionValue={200}
                        // fadeInDuration={750}
                        // fadeOutDuration={1000}
                        opacity={0.8}
                    />
                </View>

                <View style={{alignItems:'center',backgroundColor:'#f0eff4'}}>
                    <Image source={require('../../../res/images/Launch_bg.png')} style={{height:'45%',width:'100%'}} />
                    <Image source={require('../../../res/images/LOGO-Model.png')} style={styles.logImage}/>
                    <View style={{alignItems:'center',width:'92%',marginTop:-40,backgroundColor:'#fff',borderRadius:5,overflow:'visible'}}>
                        <Text style={{color:'#5baafb',fontSize:20,marginTop:40,marginBottom:30}}>欢迎登录</Text>
                        <TextInput
                            style={styles.TextInput}
                            onChangeText={(user) => this.setState({user})}
                            placeholder={"请输入用户名"}
                            underlineColorAndroid='transparent'
                            value={this.state.user}
                        />
                        <TextInput
                            style={styles.TextInput}
                            onChangeText={(pw) => this.setState({pw})}
                            placeholder={"请输入密码"}
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                            value={this.state.pw}
                        />
                        <TouchableOpacity style={[styles.center,styles.TouchableOpacity]} onPress={()=>this.onButtonPress()}>
                            <Text style={{color:'#fff'}}>点击登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#C8C8CF'}}>广州盛原成科技有限公司</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logImage:{
        height: 80,
        width:80,
        borderRadius:50,
        marginTop:-140,
        overflow:'visible',
        zIndex:100,
        shadowColor:'#f0eff4',
        shadowRadius:50,
        shadowOffset:{width: 10, height: 10}
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    gray:{
        backgroundColor:'#f0eff4'
    },
    TextInput:{
        height: 40,
        width:'90%',
        marginTop:15,
        borderRadius:20,
        paddingLeft:10,
        backgroundColor:'#f0eff4'
    },
    TouchableOpacity:{
        marginTop:30,
        backgroundColor:'#3396fb',
        borderRadius:20,
        width:'90%',
        height:40,
        marginBottom:80
    }
});

export default Launch;
