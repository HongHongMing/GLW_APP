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
        title: '工作区间',
        headerLeft:<View/>,
        headerRight:<TouchableOpacity onPress={() => {console.log(navigation.state.params); navigation.state.params.goToSetPage()}}>
        <Text style={{color:'#ffffff',fontSize:18,paddingRight:10}} >设置</Text>
        </TouchableOpacity>,
        // header: <NavigationBar
        //     title={''}
        //     // style={{backgroundColor:'#3396FB'}}
        //     statusBar={{backgroundColor:'#3396FB'}}
        //     rightButton = {<TouchableOpacity onPress={() => {console.log("跳转")}}>
        //         <Text style={{color:'#ffffff',fontSize:18,paddingRight:10}} >设置</Text>
        //     </TouchableOpacity>}
        // />
        })
    componentDidMount(){
        //在static中使用this方法
        this.props.navigation.setParams({ goToSetPage:this.goSetUp})
    }
    goCurrentAlarm = (e) =>{
        const {navigate} = this.props.navigation;
        navigate('currentAlarm');
    }
    goDetails = (e) =>{
        const {navigate} = this.props.navigation;
        navigate('workingSchedule');
    }
    goTeam = (e) =>{
        console.log('设置事件')
        const {navigate} = this.props.navigation;
        navigate('TeamInformation');
    }
    goSetUp =(e) => {
        const {navigate} = this.props.navigation;
        navigate('SetUp');
    }
    constructor(props) {
        super(props);
        this.state = {
            noon:4375
        };
    }
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
            tooltip: {
                show:false,
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ['#3396FB', '#f0f0f0'],
            legend: {
                show: false,
                itemGap: 12,
                left: 'left',
                data: ['占有率']
            },
            series: [{
                name: '饼图二',
                type: 'pie',
                radius: [45, 42],
                hoverAnimation: false,
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 70,
                    name: '完成率',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    }
                }, {
                    value: 30,
                    name: '占位',
                    label: {
                        normal: {
                            formatter: '\n完成率',
                            textStyle: {
                                color: '#555',
                                fontSize: 15
                            }
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#aaa'
                        },
                        emphasis: {
                            color: '#aaa'
                        }
                    },
                    hoverAnimation: false
                }]
            }]
        };
        // setInterval(()=>{this.setState({noon:this.state.noon+1})},60000)
        return (
            <Container>
                <Content>
                    <NavigationBar
                        title={'设备详情'}
                        style={{backgroundColor:'#3396FB',height:0}}
                        statusBar={{backgroundColor:'#3396FB'}}
                    />
                    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'#3396FB',height:150}}>
                        <Image source={require('../../../res/images/LOGO-Model.png')} style={styles.LogoImage}/>
                        <Text style={{color:'#ffffff',fontSize:18,paddingTop:0,paddingBottom:10}}>欢迎您,管理员</Text>
                    </View>
                    {/*<Content >*/}
                        {/*<List style={{shadowColor:'#000',marginBottom:5,shadowOffset:{'width':0,'height':2},shadowOpacity:0.1,shadowRadius:1.5,elevation:3,backgroundColor:'#fff',*/}
                        {/*}}>*/}
                            {/*<ListItem icon onPress={()=>{this.goCurrentAlarm()}}>*/}
                                {/*<Left>*/}
                                    {/*<Icon name='ios-alert' style={{color:'red'}}/>*/}
                                {/*</Left>*/}
                                {/*<Body>*/}
                                {/*<Text style={{color:'#191F25'}}>设备故障:</Text>*/}
                                {/*</Body>*/}
                                {/*<Right>*/}
                                    {/*<Badge style={{backgroundColor:'red',height:20,width:20,justifyContent:'center',alignItems:'center',}}>*/}
                                        {/*<Text style={{color:'#fff'}}>2</Text>*/}
                                    {/*</Badge>*/}
                                {/*</Right>*/}
                            {/*</ListItem>*/}
                        {/*</List>*/}
                    {/*</Content>*/}
                    <Content style={{paddingRight:10,paddingLeft:10}}>
                        <Card style={[styles.Card]}>
                            <CardItem header style={{paddingTop:5,paddingBottom:10}}>
                                <Text style={{fontSize:16,color:'#191F25',fontWeight:'bold'}}>班组生产信息</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Icon name='ios-clipboard-outline' style={styles.IconColor}/>
                                <Text style={[styles.CardText,styles.OutputText]}>早班产量:</Text>
                                <Text style={styles.CardText}>4726</Text>
                                <Text style={styles.CardText}>片</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Text style={[styles.CardText,styles.marginLeft]}>达  成  率：</Text>
                                <Text style={[styles.CardText ,styles.marginRight]}>89%</Text>
                                <Text style={styles.CardText}>良&nbsp;&nbsp;品&nbsp;&nbsp;率：</Text>
                                <Text style={styles.CardText}>100%</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Icon name='ios-clipboard-outline' style={styles.IconColor} />
                                <Text style={[styles.CardText,styles.OutputText]}>中班产量:</Text>
                                <Text style={styles.CardText}>{this.state.noon}</Text>
                                <Text style={styles.CardText}>片</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Text style={[styles.CardText,styles.marginLeft]}>达&nbsp;&nbsp;成&nbsp;&nbsp;率：</Text>
                                <Text style={[styles.CardText ,styles.marginRight]}>88%</Text>
                                <Text style={styles.CardText}>良&nbsp;&nbsp;品&nbsp;&nbsp;率：</Text>
                                <Text style={styles.CardText}>99%</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Icon name='ios-clipboard-outline' style={styles.IconColor} />
                                <Text style={[styles.CardText,styles.OutputText]}>晚班产量:</Text>
                                <Text style={styles.CardText}>0</Text>
                                <Text style={styles.CardText}>片</Text>
                            </CardItem>
                            <CardItem style={styles.Padding}>
                                <Text style={[styles.CardText,styles.marginLeft]}>达&nbsp;&nbsp;成&nbsp;&nbsp;率：</Text>
                                <Text style={[styles.CardText ,styles.marginRight]}>100%</Text>
                                <Text style={styles.CardText}>良&nbsp;&nbsp;品&nbsp;&nbsp;率：</Text>
                                <Text style={styles.CardText}>0%</Text>
                            </CardItem>
                            <CardItem footer style={{alignItems:'center',flex:1,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
                                <TouchableOpacity onPress={() => {this.goTeam()}} style={{justifyContent:'center',width:'100%',backgroundColor:'#F6F6F6',alignItems:'center',height:40}}>
                                    <Text style={{color:'#C8C8CF'}}>查看更多</Text>
                                </TouchableOpacity>
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
                                    <Echarts option={option} height={100} width={100}/>
                                </View>
                                </Body>
                            </CardItem>
                            <CardItem footer style={{alignItems:'center',flex:1,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
                                <TouchableOpacity onPress={() => {this.goDetails()}} style={{justifyContent:'center',width:'100%',backgroundColor:'#F6F6F6',alignItems:'center',height:40}}>
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
        borderRadius:Platform.OS === 'ios' ? 40:50,
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
