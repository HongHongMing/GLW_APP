import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, StyleSheet, Image,Platform ,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import NavigationBar from '../../common/NavigationBar';
import Navigator from '../../common/Navigation';
class StateScreen extends Component {
    // static navigationOptions = {
    //     title: '实时状态',
    // }
    constructor(props) {
        super(props);
        this.state = {};
    }

    _clickItem = (e) => {
        const {navigate} = this.props.navigation;
        navigate('StateScreen_tab');
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={'实时追踪'} style={{backgroundColor:'#488aff'}} statusBar={{backgroundColor:'#488aff'}}/>
                    <ScrollView >
                        <Content style={{paddingLeft:5,paddingRight:5}}>
                            <Card>
                                <CardItem cardBody style={{borderWidth:0.5,borderColor:'#cccccc'}}>
                                    <Image source={require('../../../res/images/mbj.png')} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem style={{paddingBottom:0}}>
                                    <Left>
                                        <Text>磨边机</Text>
                                    </Left>
                                </CardItem>
                                <CardItem style={{paddingTop:0,paddingBottom:0}}>
                                    <Left>
                                            {/*<Icon active name="thumbs-up" />*/}
                                            <Text>线体状态</Text>
                                    </Left>
                                    <Body>
                                        {/*<Icon active name="chatbubbles" />*/}
                                        <Text>在制数量</Text>
                                    </Body>
                                    <Right>
                                            {/*<Icon active name="chatbubbles" />*/}
                                            <Text>碎片数量</Text>
                                    </Right>
                                </CardItem>
                                <CardItem footer >
                                    <Body>
                                        <Button block onPress={this._clickItem}>
                                            <Text>查看线体详情</Text>
                                        </Button>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content style={{paddingLeft:5,paddingRight:5}}>
                            <Card>
                                <CardItem cardBody style={{borderWidth:0.5,borderColor:'#cccccc'}}>
                                    <Image source={require('../../../res/images/jct.png')} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem style={{paddingBottom:0}}>
                                    <Left>
                                        <Text>检测机</Text>
                                    </Left>
                                </CardItem>
                                <CardItem style={{paddingTop:0,paddingBottom:0}}>
                                    <Left>
                                        {/*<Icon active name="thumbs-up" />*/}
                                        <Text>线体状态</Text>
                                    </Left>
                                    <Body>
                                    {/*<Icon active name="chatbubbles" />*/}
                                    <Text>在制数量</Text>
                                    </Body>
                                    <Right>
                                        {/*<Icon active name="chatbubbles" />*/}
                                        <Text>碎片数量</Text>
                                    </Right>
                                </CardItem>
                                <CardItem footer >
                                    <Body>
                                    <Button block onPress={this._clickItem}>
                                        <Text>查看线体详情</Text>
                                    </Button>
                                    </Body>
                                </CardItem>
                            </Card>
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
    test:{
        backgroundColor:'red',
        borderBottomWidth: 0.5,
        borderColor:'#cccccc',
        height:150
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
    StateScreen
};
