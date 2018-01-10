import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { Text, View, StyleSheet, Image,Platform ,ScrollView,TextInput} from 'react-native';
import NavigationBar from '../../js/common/NavigationBar';
class StateScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar title={'实时追踪'} />
                <ScrollView>
                    <View style={styles.test}>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>
                    <View style={styles.test}></View>
                    <View style={styles.test}></View>
                    <View style={styles.test}></View>
                    <View style={styles.test}></View>
                    <View style={styles.test}></View>
                    <View style={styles.test}></View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
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
