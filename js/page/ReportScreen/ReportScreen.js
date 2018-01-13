import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, StyleSheet, Image,Platform,ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Switch,Icon,Thumbnail} from 'native-base';
import NavigationBar from '../../common/NavigationBar';
export default class ReportScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
            <NavigationBar title={'数据报表'}style={{backgroundColor:'#488aff'}}/>
                <ScrollView>
                    <Content>
                        <List style={{backgroundColor:'#ffffff'}}>
                            <ListItem icon>
                                <Left>
                                    <Icon name="paper"  style={{color:'#2c7a78'}} />
                                </Left>
                                <Body>
                                <Text>损耗率统计分析表</Text>
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
        flex:1,
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
    ReportScreen
};
