import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { Text, View, StyleSheet, Image,Platform,TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import NavigationBar from '../../common/NavigationBar';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
moment.updateLocale('zh-cn', momentLocale);
export default class MineScreen extends Component {
    state = {
        isDateTimePickerVisible: false,
    };
    constructor(props){
        super(props);
        this.state = {Date:''}
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        const DateFormat =  moment(date).format("YYYY-MM-DD hh:mm");
        this.setState({Date:DateFormat})
        this._hideDateTimePicker();
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <NavigationBar title={'我的'} style={{backgroundColor:'#3396FB'}} />
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>Show DatePicker{this.state.Date}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode={'datetime'}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    titleView:{
        height:Platform.OS=='ios'?64:44,
        paddingTop:Platform.OS=='ios'?14:0,
        backgroundColor:'#3396FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    },
});
module.exports = {
    MineScreen
};
