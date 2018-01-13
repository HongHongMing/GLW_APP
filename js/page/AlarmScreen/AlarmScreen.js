import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, StyleSheet, Image,Platform ,ScrollView} from 'react-native';
import { Container, Content,Text, Button, Icon, Left, Body, Right,ListItem,List } from 'native-base';
import NavigationBar from '../../common/NavigationBar';
import Navigator from '../../common/Navigation';
class AlarmScreen extends Component {
    // static navigationOptions = {
    //     title: '实时状态',
    // }
    constructor(props) {
        super(props);
        this.state = {};
    }

    _clickItem= (e) => {
        const {navigate} = this.props.navigation;
        navigate('AlarmScreen_detail');
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={'报警中心'} style={{backgroundColor:'#488aff'}}/>
                <ScrollView>
                    <Content>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar onPress={this._clickItem}>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name="notifications"  style={{fontSize: 26.5, color: 'red'}}/>
                                </Left>
                                <Body>
                                <Text>设备报警</Text>
                                <Text note>2017年8月12日 9:30</Text>
                                </Body>
                                <Right style={{justifyContent:'center'}}>
                                    <Icon name="arrow-forward" style={{fontSize: 26.5}}/>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    titleView:{
        height:Platform.OS=='ios'?64:44,
        paddingTop:Platform.OS=='ios'?14:0,
        backgroundColor:'#488aff',
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
    AlarmScreen
};

