import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
var ITEM_HEIGHT = 155;
class ProductionCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:styles.halt
        };
    }
    render() {
        const click = this.props.click;
        const item = this.props.itemInfo;
        const OfflineEquipmentStatus = item.OfflineEquipmentStatus;
        let renderEquipment = [];
        OfflineEquipmentStatus.forEach((value,index,array)=>{
                switch (value.Status){
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
            renderEquipment.push(<View style={{flexDirection:'row',padding:4,borderTopWidth:1,borderColor:'#F1F1F1'}}>
                <Text style={{width:100,color:'#191F25'}}>{value.name}:</Text><Text style={this.state.color}>{value.Status}</Text>
            </View>)
        });
        var bgColor = '#ffffff';
        return <TouchableOpacity onPress = {click}>
            <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,paddingRight:10,paddingLeft:10,padding:10,borderRadius:5}]}>
                <View style={{flexDirection:'row'}}>
                    <Ionicons name="ios-pulse" size={20} style={{color:'#3396FB'}}/><Text style={styles.txt}>{item.ProductionName}</Text>
                </View>
                {/*<View style={{borderColor:'#F1F1F1',borderWidth:1,marginTop:15,marginBottom:5}}></View>*/}
                    {renderEquipment}
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
export default ProductionCell;