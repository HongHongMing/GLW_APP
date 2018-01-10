import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { Text, View, StyleSheet, Image,Platform } from 'react-native';

export default class MineScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>我的</Text>
                </View>
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
    MineScreen
};
