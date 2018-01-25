import React, {Component} from 'react';
import NavigationBar from '../../common/NavigationBar';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import {itemInfos} from  './EquipmentModel'
const ITEM_HEIGHT = 100;
class Equipment_detail extends Component {
    renderButton(image){
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={()=>{
                this.props.navigation.goBack();
            }}>
            <Image
                style={{width: 26, height: 26}}
                source={image}/>
        </TouchableOpacity>;
    }
    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.Equipment,
        headerRight:<View/>,
        // headerLeft:<View/>,
    })
    componentDidMount(){
        //在static中使用this方法
        this.props.navigation.setParams({ Equipment:this.state.itemInfos.Equipment })
    }
    constructor(props) {
        super(props);
        this.state = {
            itemInfos:itemInfos.find(itemInfos=>itemInfos.EquipmentID==this.props.navigation.state.params.EquipmentID)
        };
    }

    render () {
        return (
            <View style={{flex:1}}>
                <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
                    <ScrollView>
                    <View>
                        <Image  resizeMode="stretch" style={{width:'100%',height:130,borderRadius :3}}  source={this.state.itemInfos.ImagePath}/>
                    </View>
                    <View style={{backgroundColor:'#ffffff',borderRadius:5,marginTop:10,padding:10}}>
                        <View>
                            <Text style={styles.text}>今日信息</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>产        出：</Text><Text>{this.state.itemInfos.output}</Text><Text>平方</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>故  障  数：</Text><Text>{this.state.itemInfos.fault}</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>耗  电  量：</Text><Text>{this.state.itemInfos.PowerConsumption}</Text><Text>kWh</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>电        费：</Text><Text>{this.state.itemInfos.cost}</Text><Text>元</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>良  品  率：</Text><Text>{this.state.itemInfos.yield}</Text><Text>%</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>开机时间：</Text><Text>{this.state.itemInfos.BootTime}</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>运行时间：</Text><Text>{this.state.itemInfos.performancePeriod}</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>停机时间：</Text><Text>{this.state.itemInfos.downTime}</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>故障时间：</Text><Text>{this.state.itemInfos.faultTime}</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>负  责  人：</Text><Text>{this.state.itemInfos.principal}</Text>
                        </View>
                        <View style={[styles.FdR,styles.P4]}>
                            <Text style={styles.ListTitle}>最近故障：</Text><Text>{this.state.itemInfos.TheRecentFailure}</Text>
                        </View>
                    </View>
                        <View style={{backgroundColor:'#ffffff',borderRadius:5,marginTop:10,padding:10}}>
                            <View>
                                <Text style={styles.text}>今日信息</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>加工速度实际值：</Text><Text>{this.state.itemInfos.ProcessingSpeedReality}</Text><Text>m/min</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>加工速度设定值：</Text><Text>{this.state.itemInfos.ProcessingSpeedSetValue}</Text><Text>m/min</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>开合速度设定值：</Text><Text>{this.state.itemInfos.OpeningAndClosingSpeedSetValue}</Text><Text>m/min</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#ffffff',borderRadius:5,marginTop:10,padding:10}}>
                            <View>
                                <Text style={styles.text}>设备厂家信息</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>厂家名称：</Text><Text>{this.state.itemInfos.Supplier}</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>技术支持联系人：</Text><Text>{this.state.itemInfos.Support}</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>销售联系人：</Text><Text>{this.state.itemInfos.Market}</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>厂家地址：</Text><Text>{this.state.itemInfos.FactoryAddress}</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle100}>厂家官网网址：</Text><Text>{this.state.itemInfos.FactoryURL}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:10
    },
    FdR:{
        flexDirection:'row'
    },
    P4:{
        padding:4
    },
    ListTitle:{
        width:80
    },
    ListTitle100:{
        width:116
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems:'center',
        textAlign:'center'
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    },
    listW:{
       justifyContent:'space-between'
    }
});

export default Equipment_detail;