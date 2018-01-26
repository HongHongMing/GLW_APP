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
        title: '设置'
    })

    render () {
        return (
            <View></View>
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
    ListTitle:{
        width:80
    },
    ListTitle100:{
        width:116
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems:'center',
        textAlign:'center'
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

export default SetUp;