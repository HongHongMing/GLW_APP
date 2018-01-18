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
import {itemInfos} from './AlarmModel';
const ITEM_HEIGHT = 100;
class AlarmScreen_detail extends Component {
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
        this.state = {
            AlarmID:this.props.navigation.state.params.AlarmID
        };
        this.itemInfo=itemInfos.find(itemInfos=>itemInfos.AlarmID==this.state.AlarmID)
    }



    render () {
        const date = [];
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'报警详情'} style={{backgroundColor:'#3396FB'}}
                    leftButton={this.renderButton(require('../../../res/images/ic_arrow_back_white_36pt.png'))}
                    statusBar={{backgroundColor:'#3396FB'}}
                />
                <Container style={{ paddingTop:10}}>
                    <Content>
                        <List>
                            <ListItem last style={styles.listW}>
                                <Text >报警信息:</Text><Text>{this.itemInfo.AlarmName}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>发生时间:</Text><Text>{this.itemInfo.AlarmOccurrenceTime}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>恢复时间:</Text><Text>{this.itemInfo.AlarmRecoveryTime}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>报警源:</Text><Text>{this.itemInfo.AlarmAddress}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>报警类型:</Text><Text>{this.itemInfo.AlarmType}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>报警状态:</Text><Text>{this.itemInfo.AlarmState}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>报警描述:</Text><Text>{this.itemInfo.AlarmDescribe}</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>确认时间:</Text><Text>{this.itemInfo.AlarmSetTime}</Text>
                            </ListItem>
                            <ListItem last  style={[styles.listW,{marginTop:10}]}>
                                <Text>维修录入记录:</Text><Text>{this.itemInfo.MaintenanceRecord}</Text>
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

export default AlarmScreen_detail;