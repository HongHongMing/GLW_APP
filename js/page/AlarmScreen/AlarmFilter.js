import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, StyleSheet, Image,Platform,TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Switch,Icon,Thumbnail} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import NavigationBar from '../../common/NavigationBar';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
moment.updateLocale('zh-cn', momentLocale);

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
            endTimeDate:today
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
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <NavigationBar title={'筛选'} style={{backgroundColor:'#3396FB'}}   leftButton={this.renderButton(require('../../../res/images/ic_arrow_back_white_36pt.png'))} />
                <Container>
                    <Content>
                        <List>
                            <ListItem last style={{marginTop:10}}>
                                    <Text>开始时间:</Text>
                                    <TouchableOpacity onPress={this._showStartTimeDateTimePicker} style={{marginRight:10}}>
                                        <Text style={styles.label}>{this.state.startTime}</Text>
                                    </TouchableOpacity>
                                    <Text>结束时间:</Text>
                                    <TouchableOpacity onPress={this._showEndTimeDateDateTimePicker}>
                                        <Text style={styles.label}>{this.state.endTime}</Text>
                                    </TouchableOpacity>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
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
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    label:{
        alignSelf:'flex-start',
        flexWrap:'nowrap',
        color:'#3396FB',
        paddingRight:10,
        paddingLeft:10
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
    AlarmFilter
}