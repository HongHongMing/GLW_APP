import React, { Component } from 'react';
import { View, StyleSheet, Image,Platform ,ScrollView,TouchableHighlight,TouchableOpacity} from 'react-native';
import { Container, Content,Text, Button, Icon, Left, Body, Right,ListItem,List,Form} from 'native-base';
import NavigationBar from '../../common/NavigationBar';
class AlarmList extends Component {
    // static navigationOptions = {
    //     title: '实时状态',
    // }
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    _clickItem= (e) => {
        const {navigate} = this.props.navigation;
        navigate('AlarmScreen_detail');
    }
    renderFilter(){
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={()=>{
                const {navigate} = this.props.navigation;
                navigate('AlarmFilter');
            }}>
            <Text style={styles.title}>筛选</Text>
        </TouchableOpacity>;
    }
    render() {
        var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'报警中心'}
                    style={{backgroundColor:'#488aff',zIndex:10}}
                    statusBar={{backgroundColor:'#488aff'}}
                    rightButton={this.renderFilter()}
                />
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
                                    <Right>
                                        <Text note>状态：未确认未恢复</Text>
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
    }, button: {
        backgroundColor: '#b8c',
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
});
module.exports = {
    AlarmList
};

