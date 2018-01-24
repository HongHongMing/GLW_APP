/**
 * NavigationBar
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image,
    StatusBar,
    Text,
    View
} from 'react-native'
import PropTypes from 'prop-types';
const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default',]),
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
};
export default class NavigationBar extends Component {
    static propTypes = {
        style: PropTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        statusBar: PropTypes.shape(StatusBarShape),
        rightButton:  PropTypes.element,
        leftButton: PropTypes.element,

    }
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false,
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        };
        console.log(this.props.statusBar.hidden)
    }

    getButtonElement(data) {
        return (
            <View style={styles.navBarButton}>
                {data? data : null}
            </View>
        );
    }

    render() {
        let statusBar = <View style={[styles.statusBar,...this.props.statusBar]}>
                <StatusBar {...this.props.statusBar} />
            </View>;

        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title}>{this.props.title}</Text>;

        let content = this.props.hide ? null :
            <View style={styles.navBar}>
                {this.getButtonElement(this.props.leftButton)}
                <View style={styles.navBarTitleContainer}>
                    {titleView}
                </View>
                {this.getButtonElement(this.props.rightButton)}
            </View>;
        return (
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        // height:0,

    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
        // height:0
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        top: 0,
        right: 40,
        bottom: 0,
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight:'500'
    },
    navBarButton: {
        alignItems: 'center',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT:0,
        backgroundColor:'#3396FB'
    },
})
