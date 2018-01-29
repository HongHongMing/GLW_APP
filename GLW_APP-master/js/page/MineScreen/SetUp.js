import React, {Component} from 'react';
import NavigationBar from '../../common/NavigationBar';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
const ITEM_HEIGHT = 100;
class SetUp extends Component {
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

    static navigationOptions = ({navigation,screenProps}) => ({
        title: '设置',
        headerRight:<View/>
    })

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.List}>
                    <Text style={styles.text}>用户信息</Text>
                </View>
                <View style={styles.List}>
                    <Text style={styles.text}>修改密码</Text>
                </View>
                <View style={styles.List}>
                    <Text style={styles.text}>关于</Text>
                </View>
                <View style={styles.List}>
                    <Text style={styles.text}>退出</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:10
    },
    FdR:{
        flexDirection:'row'
    },
    P4:{
        padding:4
    },
    List:{
        height:52,
        backgroundColor:'#ffffff',
        borderColor:'#c9c9c9',
        borderBottomWidth:1,
        justifyContent:'center'
    },
    ListTitle:{
        width:80
    },
    ListTitle100:{
        width:116
    },
    text: {
        fontSize: 16,
        textAlign:'left',
        paddingLeft:10,
        color:'#000000'
    },
    txt: {
        textAlign: 'left',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    },
    listW:{
        justifyContent:'space-between'
    }
});

export default SetUp;