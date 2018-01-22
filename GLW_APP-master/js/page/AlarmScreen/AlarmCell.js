import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
var ITEM_HEIGHT = 85;
class AlarmCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:styles.No_Q_No_H
        };
    }
    render() {
        const click = this.props.click;
        const item = this.props.itemInfo
        switch(item.AlarmState)
        {
            case "已确认已恢复":
                this.state.color=styles.Yes_Q_Yes_H
                break;
            case "已确认未恢复":
                this.state.color=styles.Yes_Q_No_H
                break;
            case "未确认已恢复":
                this.state.color=styles.No_Q_Yes_H
                break;
            case "未确认未恢复":
                this.state.color=styles.No_Q_No_H
                break;
            default:
        }
        var bgColor = '#ffffff';
        return <TouchableOpacity onPress = {click}>
            <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,paddingRight:10,paddingLeft:10,padding:10,borderRadius:5}]}>
            <Text style={styles.txt}>{item.AlarmName}</Text>
            <View style={{borderColor:'#F1F1F1',borderWidth:1,marginTop:15,marginBottom:5}}></View>
            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text>时间：{item.AlarmOccurrenceTime}</Text>
                <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                    <Text>状态：</Text><Text style={this.state.color}>{item.AlarmState}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    }
}
const styles = StyleSheet.create({
    txt: {
        textAlign: 'left',
        textAlignVertical: 'center',
        color: '#000000',
        fontSize: 16,
    },
    No_Q_No_H:{
        color:'#ff0000'
    },
    No_Q_Yes_H:{
        color:'#0000ff'
    },
    Yes_Q_Yes_H:{
        color:'#32cd32'
    },
    Yes_Q_No_H:{
        color:'#ffa500'
    }
})
export default AlarmCell;