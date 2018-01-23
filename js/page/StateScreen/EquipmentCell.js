import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
var ITEM_HEIGHT = 125;
class EquipmentCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:styles.halt
        };
    }
    render() {
        const click = this.props.click;
        const item = this.props.OfflineEquipmentStatus;
        console.log(item)
                switch (item.Status){
                    case "正在加工":
                        this.state.color=styles.process;
                        break;
                    case  "停机" :
                        this.state.color=styles.halt;
                        break;
                    case "故障":
                        this.state.color=styles.malfunction;
                        break;
                    case "开机":
                        this.state.color=styles.starting;
                        break;
                }
        let renderEquipment = <View style={{flexDirection:'row',padding:4}}>
            <Text style={{width:100,color:'#191F25'}}>设备状态:</Text><Text style={this.state.color}>{item.Status}</Text>
        </View>
        var bgColor = '#ffffff';
        return <TouchableOpacity onPress = {click}>
            <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,paddingRight:10,paddingLeft:10,padding:10,borderRadius:5,flexDirection:'row'}]}>
                <View>
                    <Image style={{width:100,height:100}}
                        source={item.ImagePath}
                    />
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={styles.txt}>{item.Equipment}</Text>
                    {renderEquipment}
                    <View style={{flexDirection:'row',padding:4}}>
                        <Text style={{width:100,color:'#191F25'}}>开机时间:</Text><Text style={styles.title}>{item.BootTime}</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:4}}>
                        <Text style={{width:100,color:'#191F25'}}>今日用电费用:</Text><Text style={styles.title}>{item.cost}元</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }
}
const styles = StyleSheet.create({
    txt: {
       alignItems:'center',
        textAlignVertical: 'center',
        color: '#3396FB',
        fontSize: 16,
        marginBottom:5
    },
    tite:{
        color:'#191F25'
        },
    malfunction:{
        color:'#ff0000'
    },
    starting:{
        color:'#0000ff'
    },
    process:{
        color:'#32cd32'
    },
    halt:{
        color:'#A0A2A5'
    }
})
export default EquipmentCell;