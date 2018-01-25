import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
var ITEM_HEIGHT = 85;
class ReportCard extends Component {
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
                    <View style={styles.mB5}>
                        <Text style={styles.txt}>{item.ReportName}</Text>
                    </View>
                    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text style={styles.noneTxt}>{item.ReportDescription}</Text>
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
    noneTxt:{
      color:'#A0A2A5'
    },
    mB5:{
        marginBottom:5
    }
})
export default ReportCard;