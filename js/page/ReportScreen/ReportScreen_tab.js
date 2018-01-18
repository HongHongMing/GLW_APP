import React, {Component} from 'react';
import NavigationBar from '../../common/NavigationBar';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import ReportScreenTabs from './ReportScreenTabs'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Tab,Tabs,ScrollableTab  } from 'native-base';
const ITEM_HEIGHT = 100;
class ReportScreen_tab extends Component {
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
    static navigationOptions = {
        title: '开发中'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'数据报表'} style={{backgroundColor:'#3396FB'}}
                    leftButton={this.renderButton(require('../../../res/images/ic_arrow_back_white_36pt.png'))}
                    statusBar={{backgroundColor:'#3396FB'}}
                />
                <ReportScreenTabs/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});

export default ReportScreen_tab;