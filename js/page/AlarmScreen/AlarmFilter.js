import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, StyleSheet, Image,Platform,TouchableOpacity,Text} from 'react-native';
import {Button,Icon} from 'native-base';
import Picker from 'react-native-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
moment.updateLocale('zh-cn', momentLocale);
const data = ["全部","未确认未恢复","已确认已恢复","未确认已恢复","已确认已恢复"];
class AlarmFilter extends Component{
    state = {
        isDateTimePickerVisible: false,
        isStartTime:false,
        isEndTime:false
    };
    constructor(props){
        super(props);
        const today = new Date();
        this.state = {
            startTime:moment(today).format("YYYY-MM-DD"),
            endTime:moment(today).format("YYYY-MM-DD"),
            startTimeDate:today,
            endTimeDate:today,
            text:'全部'
        }
    }
    _showStartTimeDateTimePicker = () => this.setState({ isStartTime: true });
    _showEndTimeDateDateTimePicker = () => this.setState({ isEndTime: true });

    _hideStartTimeDateTimePicker = () => this.setState({ isStartTime: false });
    _hideEndTimeDateTimePicker = () => this.setState({ isEndTime: false });
    _handleStartTimeDatePicked = (date) => {
        const DateFormat =  moment(date).format("YYYY-MM-DD");
        this.setState({startTime:DateFormat});
        this.setState({startTimeDate:date});
        this._hideStartTimeDateTimePicker();
    };
    _handleEndTimeDatePicked = (date) => {
        const DateFormat =  moment(date).format("YYYY-MM-DD");
        this.setState({endTime:DateFormat});
        this.setState({endTimeDate:date});
        this._hideEndTimeDateTimePicker();
    };

    PickerFuntion = (e) => {
        Picker.init({
            pickerData: data,
            selectedValue: [1],//默认显示哪一个
            pickerTitleText:"请选择",
            pickerConfirmBtnText:"确定",
            pickerCancelBtnText:"取消",
            onPickerConfirm: data => {
                // console.log(data,"确定");
                this.setState({text:data[0]})
                console.log(data,this.state.text);
            },
            onPickerCancel: data => {
                console.log(data,"取消");
            },
            onPickerSelect: data => {
                console.log(data,"滑动选中");
            }
        });
        Picker.show();
    }

    render() {
        return (
            <View style={{flexDirection:'row',padding:5,backgroundColor:'#ffffff',borderTopWidth:1,borderColor:'#C8C8CF'}}>
            <View style={{backgroundColor:'#ffffff',width:'90%'}}>
                <View style={{flexDirection:'row',}}>
                    <View style={{flexDirection:'row'}}>
                        <Text>开始时间:</Text>
                            <TouchableOpacity onPress={this._showStartTimeDateTimePicker} style={{marginRight:10}}>
                            <Text style={styles.label}>{this.state.startTime}</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>结束时间:</Text>
                        <TouchableOpacity onPress={this._showEndTimeDateDateTimePicker}>
                            <Text style={styles.label}>{this.state.endTime}</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isStartTime}
                        onConfirm={this._handleStartTimeDatePicked}
                        onCancel={this._hideStartTimeDateTimePicker}
                        date ={new Date(this.state.startTimeDate)}
                        mode={'date'}
                    />
                    <DateTimePicker
                        isVisible={this.state.isEndTime}
                        onConfirm={this._handleEndTimeDatePicked}
                        onCancel={this._hideEndTimeDateTimePicker}
                        date ={new Date(this.state.endTimeDate)}
                        mode={'date'}
                    />
                </View>
                <View>
                    <TouchableOpacity   onPress={this.PickerFuntion}>
                    <Text>选择状态:   {this.state.text}</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <View>
                    <TouchableOpacity>
                        <Icon name='search' style={{color:'#3396FB'}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    label:{
        alignSelf:'flex-start',
        flexWrap:'nowrap',
        color:'#3396FB',
        paddingRight:10,
        paddingLeft:10
    }
});
module.exports = {
    AlarmFilter
}