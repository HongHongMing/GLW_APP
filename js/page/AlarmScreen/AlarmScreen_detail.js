import React, {Component} from 'react';
import NavigationBar from '../../common/NavigationBar';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Tab,Tabs,ScrollableTab,Left,Body } from 'native-base';
const ITEM_HEIGHT = 100;
class StateScreen_detail extends Component {
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
                    title={'报警详情'} style={{backgroundColor:'#488aff'}}
                    leftButton={this.renderButton(require('../../../res/images/ic_arrow_back_white_36pt.png'))}
                    statusBar={{backgroundColor:'#488aff'}}
                />
                <Container style={{ paddingTop:10}}>
                    <Content>
                        <List>
                            <ListItem last style={styles.listW}>
                                <Text >报警信息:</Text><Text>设备报警</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>报警时间:</Text><Text>2017年8月11日 9:30</Text>
                            </ListItem>
                            <ListItem last style={[styles.listW,{marginTop:10}]}>
                                <Text>报警状态:</Text><Text>未确认未恢复</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>确认时间:</Text><Text>2017年8月11日 16:14</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>报警类型:</Text><Text>越限报警</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>操作人员:</Text><Text>工作人员A</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
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
    },
    listW:{
        justifyContent:'space-between'
    }
});

export default StateScreen_detail;