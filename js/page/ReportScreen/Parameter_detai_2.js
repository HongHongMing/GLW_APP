import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    RefreshControl,
    Image,
    TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import {detailMode} from './Parameter_detailModel';
import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');
var ITEM_HEIGHT = 105;
class Parameter_detai_2 extends Component {
    _flatList;
    constructor(props) {
        super(props);
        this.state = {
            ReportID:this.props.navigation.state.params.ReportID,
            refreshing: false,
            data:[],
            DeviceBootTime:[8,8,8],
            ProcessingTime: [7,7,7],
            Downtime:[0.3,0.4,0.5],
            FaultTime:[0.3,0.2,0.1],
        };
        detailMode.find((value, index, arr) => {
            if(value.ReportID == this.state.ReportID){
                this.state.data.push(value);
            }
        })
        // detailMode.find(detailMode=>  detailMode.ReportID==this.state.ReportID);
    }
    static navigationOptions = {
        title:'设备运行状态统计表',
        headerRight:<View/>,
    }
    navigationOptions = {
        title:'设备运行状态统计表',
        headerRight:<View/>,
        headerLeft:<TouchableOpacity
            style={{padding: 8}}
            onPress={()=>this.goBack()}>
            <Image
                style={{width: 26, height: 26}}
                source={require('../../../res/images/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }


    goBack =(e)=>{
        this.props.navigation.goBack();
    }

    // _header = () => {
    //     return <Echarts option={option} height={300} width={width}/>;
    // }

    _separator = () => {
        return <View style={{height:10,backgroundColor:'#e9e9ef'}}/>;
    }

    _renderItem = (item) => {
        console.log(item)
        const bgColor = '#ffffff';
        return <View>
                    <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,
                            padding:10,borderRadius:5
                        }]}>
                        <View style={{flexDirection:'row'}}>
                            <View style={[{flexDirection:'row'},styles.tableCellW]}>
                                <Text>生产日期：</Text><Text>{item.item.ProductionDate}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>班        别：</Text><Text>{item.item.Class}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={[{flexDirection:'row'},styles.tableCellW]}>
                                <Text>开机时长：</Text><Text>{item.item.DeviceBootTime}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>加工时长：</Text><Text>{item.item.ProcessingTime}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={[{flexDirection:'row'},styles.tableCellW]}>
                                <Text>停机时间：</Text><Text>{item.item.Downtime}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>故障时间:</Text><Text>{item.item.FaultTime}</Text>
                            </View>
                        </View>
                        <View style={{borderColor:'#F1F1F1',borderWidth:1,marginTop:5,marginBottom:5}}></View>
                        <View style={{flexDirection:'row'}}>
                            <Text>操  作  工：</Text><Text>{item.item.Operator}</Text>
                        </View>
                    </View>
                </View>
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }
    async fetchData() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson.movies;
        } catch(error) {
            console.error(error);
        }
    }
    render() {
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['开机时长','加工时长','停机时间','故障时间']
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            //各种表格
            // toolbox: {
            //     //改变icon的布局朝向
            //     //orient: 'vertical',
            //     show : true,
            //     showTitle:true,
            //     feature : {
            //         //show是否显示表格，readOnly是否只读
            //         dataView : {show: true, readOnly: false},
            //         magicType : {
            //             //折线图  柱形图    总数统计 分开平铺
            //             type: ['line', 'bar','stack','tiled'],
            //         },
            //
            //     }
            // },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    name : '',
                    data : ['早班','中班','晚班']
                },
            ],
            yAxis : [
                {
                    type : 'value',
                    name : ''
                }
            ],
            //图形的颜色组
            color:['#f6b55d','#4ea7eb',"#16c295","#f2725c"],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'开机时长',
                    //默认显
                    type:'bar',
                    data:this.state.DeviceBootTime
                },
                {
                    name:'加工时长',
                    type:'bar',
                    data:this.state.ProcessingTime
                },
                {
                    name:'停机时间',
                    type:'bar',
                    data:this.state.Downtime,
                },
                {
                    name:'故障时间',
                    type:'bar',
                    data:this.state.FaultTime,
                }
            ]
        };
        return(
            <View style={{flex:1}}>
                <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem }
                        ListHeaderComponent={ <View style={{backgroundColor:'#ffffff',borderRadius:5,marginBottom:10}}><Echarts option={option} height={300} width={width}/></View>}
                        refreshControl= { <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />}
                        data={this.state.data}>
                    </FlatList>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10
    },
    tableCellW:{
        width:'50%'
    }
})
export default Parameter_detai_2;