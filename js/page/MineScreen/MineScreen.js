import React, { Component } from 'react';
import{ View, Text ,TouchableOpacity,StyleSheet,Image,StatusBar,Platform}from 'react-native';
import {Container, Content,Card, CardItem, Icon,Body,ListItem,Left,Right,Badge,List} from 'native-base';
import Echarts from 'native-echarts';
import NavigationBar from '../../common/NavigationBar';
export default class MineScreen extends Component {
    // static navigationOptions = {
    //     title: '',
    //     headerRight:<View/>,
    //     headerLeft:<View/>,
    //     headerMode:'none',
    //     headerStyle: {
    //         backgroundColor:'red',
    //         shadowOpacity:0.5,
    //         elevation: 0.5
    //     },
    // }
    static navigationOptions = ({navigation,screenProps}) => ({
        headerStyle:{backgroundColor:'#red'},
        header:null
        })
    render() {
        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
        };
        var placeHolderStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };
        option = {
            title: {
                text: '完成率',
                subtext:'75%',
                x: 'center',
                y: '25',
                textStyle: {
                    fontWeight: 'normal',
                    color:'#191F25',
                    fontSize: 12
                },
                subtextStyle:{
                    color: "#3396FB",
                    fontSize: 14
                }
            },
            color: ['#3396FB', '#f0f0f0'],
            tooltip: {
                show: false,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                show: false,
                itemGap: 12,
                data: ['01', '02']
            },
            toolbox: {
                show: false
            },
            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: false,
                radius: [32, 42],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                    value: 75,
                    name: '01'
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

                ]
            }

            ]
        };

        return (
            <Container>
                <Content>
                    <NavigationBar
                        title={'设备详情'} style={{backgroundColor:'#3396FB',height:0}}
                        statusBar={{backgroundColor:'#3396FB'}}
                    />
                    <View style={{backgroundColor:'#3396FB'}}>
                        <TouchableOpacity onPress={() => {console.log("跳转")}}
                                          style={styles.BtnSetUp}>
                            <Text style={{color:'#ffffff',fontSize:18}} >设置</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'#3396FB',height:150}}>
                        <Image source={require('../../../res/images/LOGO-Model.png')} style={styles.LogoImage}/>
                        <Text style={{color:'#ffffff',fontSize:18,paddingTop:0,paddingBottom:10}}>欢迎您,管理员</Text>
                    </View>
                    <Content >
                        <List style={{shadowColor:'#000',marginBottom:5,shadowOffset:{'width':0,'height':2},shadowOpacity:0.1,shadowRadius:1.5,elevation:3,backgroundColor:'#fff',
                        }}>
                            <ListItem icon>
                                <Left>
                                    <Icon name='ios-alert' style={{color:'red'}}/>
                                </Left>
                                <Body>
                                <Text style={{color:'#191F25'}}>设备故障:</Text>
                                </Body>
                                <Right>
                                    <Badge style={{backgroundColor:'red',height:20,width:20,justifyContent:'center',alignItems:'center',}}>
                                        <Text style={{color:'#fff'}}>2</Text>
                                    </Badge>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                    <Content style={{paddingRight:10,paddingLeft:10}}>
                        <Card style={[styles.Card,styles.Padding]}>
                            <CardItem header style={{paddingTop:5,paddingBottom:10}}>
                                <Text style={{fontSize:16,color:'#191F25',fontWeight:'bold'}}>实时状态</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Icon name='ios-clipboard-outline' style={styles.IconColor}/>
                                <Text style={[styles.CardText,styles.OutputText]}>早班产量:</Text>
                                <Text style={styles.CardText}>47264</Text>
                                <Text style={styles.CardText}>片</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Text style={[styles.CardText,styles.marginLeft]}>达成率：</Text>
                                <Text style={[styles.CardText ,styles.marginRight]}>89%</Text>
                                <Text style={styles.CardText}>良品率：</Text>
                                <Text style={styles.CardText}>68%</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Icon name='ios-clipboard-outline' style={styles.IconColor} />
                                <Text style={[styles.CardText,styles.OutputText]}>中班产量:</Text>
                                <Text style={styles.CardText}>84726</Text>
                                <Text style={styles.CardText}>片</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Text style={[styles.CardText,styles.marginLeft]}>达成率：</Text>
                                <Text style={[styles.CardText ,styles.marginRight]}>89%</Text>
                                <Text style={styles.CardText}>良品率：</Text>
                                <Text style={styles.CardText}>68%</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Icon name='ios-clipboard-outline' style={styles.IconColor} />
                                <Text style={[styles.CardText,styles.OutputText]}>晚班产量:</Text>
                                <Text style={styles.CardText}>72649</Text>
                                <Text style={styles.CardText}>片</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Text style={[styles.CardText,styles.marginLeft]}>达成率：</Text>
                                <Text style={[styles.CardText ,styles.marginRight]}>89%</Text>
                                <Text style={styles.CardText}>良品率：</Text>
                                <Text style={styles.CardText}>68%</Text>
                            </CardItem>
                        </Card>
                        <Card style={styles.Card}>
                            <CardItem header style={{paddingTop:10,paddingBottom:0}}>
                                <Text style={{fontSize:16,color:'#191F25',fontWeight:'bold'}}>生产线 1</Text>
                                <View style={{backgroundColor:'#16c295',borderRadius:10,width:50,alignItems:'center',marginLeft:10}}>
                                    <Text style={{color:'#fff'}}>运行</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{paddingTop:10,paddingBottom:5,}}>
                                <Body style={{flexDirection:'row',alignItems:'center',flex:1}}>
                                <View style={{alignItems:'center',width:'50%',justifyContent:'center',height:100}}>
                                    <Text style={{fontSize:18,color:'#191F25',}}>E456312</Text>
                                    <Text style={{fontSize:14,justifyContent:'center',marginTop:10,color:'#191F25',}}>流程号</Text>
                                </View>
                                <View style={{alignItems:'center',width:'50%'}}>
                                    <Echarts option={option} height={100}/>
                                </View>
                                </Body>
                            </CardItem>
                            <CardItem footer style={{alignItems:'center',flex:1,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
                                <TouchableOpacity onPress={() => {console.log("跳转")}} style={{justifyContent:'center',width:'100%',backgroundColor:'#F6F6F6',alignItems:'center',height:40}}>
                                    <Text style={{color:'#C8C8CF'}}>查看更多</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </Content>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    BtnSetUp:{
        paddingTop:0,
        paddingBottom:0,
        right:10,
        height:20,
        alignItems:'flex-end',
        marginTop:10,
        marginRight:5,
        color:'#ffffff',
        backgroundColor:'#3396FB'
    },
    LogoImage:{
        height:80,
        width:80,
        borderRadius:50,
        marginTop:-10
    },
    Card:{
        marginTop:5,
        marginBottom:5,
        // marginLeft:10,
        // marginRight:10,
        borderRadius:2,
        // borderColor:'#00000000',
        // shadowColor:'#00000000',
    },
    Padding:{
        paddingTop:5,
        paddingBottom:5,
    },
    CardText:{
        color:'#191F25',
        fontSize:14,
    },
    OutputText:{
        marginRight:10
    },
    marginLeft:{
        marginLeft:33,
    },
    marginRight:{
        marginRight:50
    },
    IconColor:{
        color:'#3396FB',
        alignItems:'flex-start',
        fontSize:20
    }
})
