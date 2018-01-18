import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
var ITEM_HEIGHT = 85;
class AlarmCell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const item = this.props.itemInfo;
        const click = this.props.click;
        var bgColor = '#ffffff';
        return <TouchableOpacity onPress = {click}>
            <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,paddingRight:10,paddingLeft:10,padding:10,borderRadius:5}]}>
            <Text style={styles.txt}>磨边机1设备报警</Text>
            <View style={{borderColor:'#F1F1F1',borderWidth:1,marginTop:15,marginBottom:5}}></View>
            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text>时间：2017-12-25 16:30</Text>
                <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                    <Text>状态：</Text><Text>未确认未恢复</Text>
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
        fontSize: 18,
    }
})
export default AlarmCell;