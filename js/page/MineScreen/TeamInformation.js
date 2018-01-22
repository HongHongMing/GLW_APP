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
class TeamInformation extends Component {
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
        title:'今日班组生产信息',
        headerRight:<View/>,
        // headerLeft:<View/>,
    })
    constructor(props) {
        super(props);
        this.state = {
            itemInfos:''
        };
    }
    goTeam = (e) =>{
        const {navigate} = this.props.navigation;
        navigate('Parameter_detai_2',{ReportID:2});
    }

    render () {
        return (
            <View style={{flex:1}}>
                <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
                    <ScrollView>
                        <View style={{backgroundColor:'#ffffff',borderRadius:5,padding:10}}>
                            <View>
                                <Text style={styles.text}>早班</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>实际产能：</Text><Text>47264</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>实际工时：</Text><Text></Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>达  成  率：</Text><Text>89%</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>良  品  率：</Text><Text>68%</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>中班</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>实际产能：</Text><Text>84726</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>实际工时：</Text><Text></Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>达  成  率：</Text><Text>89%</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>良  品  率：</Text><Text>68%</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>晚班</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>实际产能：</Text><Text>72649</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>实际工时：</Text><Text></Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>达  成  率：</Text><Text>89%</Text>
                            </View>
                            <View style={[styles.FdR,styles.P4]}>
                                <Text style={styles.ListTitle}>良  品  率：</Text><Text>68%</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {this.goTeam()}} style={{justifyContent:'center',width:'100%',backgroundColor:'#ffffff',alignItems:'center',height:40,borderWidth:1,borderColor:'#3396FB',borderRadius:5}}>
                                    <Text style={{color:'#3396FB'}}>查看更多</Text>
                                </TouchableOpacity>
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
        width:70
    },
    ListTitle100:{
        width:116
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems:'center',
        textAlign:'left'
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

export default TeamInformation;