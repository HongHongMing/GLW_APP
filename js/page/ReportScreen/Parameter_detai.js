import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import detailMode from './Parameter_detailModel';
var ITEM_HEIGHT = 85;
class Parameter_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const item = this.props.itemInfo;
        const click = this.props.click;
        var bgColor = '#ffffff';
        return <TouchableOpacity onPress = {click}>
            <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,paddingRight:10,paddingLeft:10,padding:20,borderRadius:5,flexDirection:'row'}]}>
                <View style={{marginRight:10}}>
                    <Ionicons
                        name={'ios-paper'}
                        size={40}
                        style={{ color: '#3396FB' }}/>
                </View>
                <View>
                    <Text style={styles.txt}>{item.ReportName}</Text>
                    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text>{item.ReportDescription}</Text>
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
        fontSize: 14,
    }
})
export default Parameter_detail;