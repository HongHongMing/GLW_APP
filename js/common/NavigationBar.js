/**
 * NavigationBar
 * @flow
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image,
    StatusBar,
    Text,
    View
} from 'react-native';
const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;
export default class NavigationBar extends Component {
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        rightButton:  PropTypes.element,
        leftButton: PropTypes.element,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        };
    }
    render() {
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title} >{this.props.title}</Text>;
        let content = this.props.hide ? null :
            <View>
                <View style={styles.titleView}>
                    {titleView}
                </View>
            </View>;
        return (
            <View style={styles.container}>
                {content}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray'
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
})