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
                <Container>
                    <Content>
                        <List>
                            <ListItem last style={styles.listW}>
                                <Text >在制数量:</Text><Text>8</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>碎片数:</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={[styles.listW,{marginTop:10}]}>
                                <Text>正常运行时间(min):</Text><Text>6000</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>故障停机时间(min):</Text><Text>305</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>正常停机时间(min):</Text><Text>5000</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>今日故障时间(min):</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>平均故障时间(min):</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>故障数:</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={[styles.listW,{marginTop:10}]}>

                                <Text>设备稼动率:</Text><Text>5%</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>实时电压(V):</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>实时电流(A):</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>实时功率(W):</Text><Text>5</Text>
                            </ListItem>
                            <ListItem last style={styles.listW}>
                                <Text>实时温度(℃):</Text><Text>28</Text>
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
        flex:1,
        paddingTop:10
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