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
const ITEM_HEIGHT = 100;
class workingSchedule extends Component {
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
        title:'生产线1',
        headerRight:<View/>,
        // headerLeft:<View/>,
    })
    constructor(props) {
        super(props);
        this.state = {
            itemInfos:''
        };
    }

    render () {
        return (
            <View style={{flex:1}}>
                <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
                    <ScrollView>
                        <View style={{backgroundColor:'#ffffff',borderRadius:5,padding:10}}>
                            <View>
                                <Text style={styles.text}>正在生产信息</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>流程卡号：</Text><Text>E456312</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>总  卡  数：</Text><Text></Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>已完成数：</Text><Text></Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>未完成数：</Text><Text></Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>完  成  率：</Text><Text>80%</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#ffffff',borderRadius:5,marginTop:10,padding:10}}>
                            <View>
                                <Text style={styles.text}>完成订单信息TOP5</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>流程卡号：</Text><Text>D170709074.02/B</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>开始加工：</Text><Text>2017/7/1  12:00:00</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>完成时间：</Text><Text>2017/7/2  12:00:00</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>总  片  数：</Text><Text>100</Text>
                            </View>
                            {/*<View>*/}
                                {/*<TouchableOpacity onPress={() => {console.log(1)}} style={{justifyContent:'center',width:'100%',backgroundColor:'#ffffff',alignItems:'center',height:40,borderWidth:1,borderColor:'#3396FB',borderRadius:5}}>*/}
                                    {/*<Text style={{color:'#3396FB'}}>查看更多</Text>*/}
                                {/*</TouchableOpacity>*/}
                            {/*</View>*/}
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
        width:70
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

export default workingSchedule;