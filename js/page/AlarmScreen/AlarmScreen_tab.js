import React, {Component} from 'react';
import NavigationBar from '../../common/NavigationBar';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import StateScreenTabs from '../../common/StateScreenTabs'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Tab,Tabs,ScrollableTab  } from 'native-base';
const ITEM_HEIGHT = 100;
class StateScreen_tab extends Component {
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
                    title={'报警中心'} style={{backgroundColor:'#488aff'}}
                    statusBar={{backgroundColor:'#488aff'}}
                />
                <StateScreenTabs/>
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

export default StateScreen_tab;