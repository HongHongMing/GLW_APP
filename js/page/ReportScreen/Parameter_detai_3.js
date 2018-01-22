import React, { Component } from 'react';
import{ StyleSheet,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    RefreshControl,
    ScrollView,
}from 'react-native';
import NavigationBar from '../../../js/common/NavigationBar';
import {
    Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Icon, Left,
    Body ,Right,List,Separator,ListItem
} from 'native-base';
import PopupDialog from 'react-native-popup-dialog';
import CardList from './CardList'

var data = [
    {key: 1, title: "we"},
    {key: 2, title: "er"},
    {key: 3, title: "we"},
    {key: 4, title: "er"},
    {key: 5, title: "we"},
    {key: 6, title: "er"},
    {key: 7, title: "we"},
    {key: 8, title: "er"},
    {key: 9, title: "we"},
    {key: 10, title: "er"},
    {key: 11, title: "we"},
    {key: 12, title: "er"},
    {key: 13, title: "we"},
    {key: 14, title: "er"},
    {key: 15, title: "er"},
    {key: 16, title: "er"},
    {key: 17, title: "er"},
    {key: 18, title: "er"},
    {key: 19, title: "er"},
    {key: 20, title: "er"},

 ];
// for (var i = 1; i <= 15; i++) {
//     data.push({key: i, title: i + ''});
// }
export default class Parameter_detai_3 extends Component {
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
        title:'玻璃损坏统计表',
    }
    navigationOptions = {
        title:'玻璃损坏统计表',
        headerRight:<View/>,
        headerLeft:<TouchableOpacity
            style={{padding: 8}}
            onPress={()=>this.goBack()}>
            <Image
                style={{width: 26, height: 26}}
                source={require('../../../res/images/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }
    _flatList;
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }
    _footer = () => (
        <Text style={{fontSize: 14, alignSelf: 'center'}}>到底啦，没有啦！</Text>
    )

    async fetchData() {
        console.log('可爱的漫漫，刷新啦！刷新啦！！');
    }
    render() {
        return (
            <View>
                <NavigationBar
                    title={'玻璃损坏统计表'} style={{backgroundColor:'#3396FB',height:0}}
                    statusBar={{backgroundColor:'#3396FB'}}
                />
                    <FlatList style={styles.ScrollView}
                        ref={(flatList)=>this._flatList = flatList}
                        data={data}
                        keyExtractor={ (item,index)=>item.title}
                        refreshControl= { <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            ListFooterComponent={this._footer}
                        />}
                        renderItem={({item}) => (
                            <CardList/>
                        )}>
                    </FlatList>
                <List style={styles.BottomList}>
                    <ListItem avatar style={{backgroundColor:'#fff',marginLeft:0}}>
                        <Body>
                        <Text>损耗数量：4</Text>
                        <Text note>总数量：20</Text>
                        </Body>
                        <Right style={{paddingTop:0,paddingBottom:0}}>
                            <TouchableOpacity onPress={() => {this.popupDialog.show();console.log(data)}}
                                              style={styles.Btndetails}>
                                <Text style={{color:'#3396FB', marginRight:10}}>详情</Text>
                                <Icon style={{color:'#3396FB',fontSize:30}} name='ios-arrow-dropup' />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
                <PopupDialog
                    // dismissOnHardwareBackPress=false
                    // haveOverlay=false
                    // dismissOnTouchOutside=false
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    width="0.8"
                    // height="0.34"
                    // overlayPointerEvents="none"
                >
                    <View style={styles.dialogContentView}>
                        <Content>
                            <TouchableOpacity onPress={() => {this.popupDialog.dismiss()}}
                                              style={styles.BtnPopClose}>
                                <Icon name='ios-close-outline' style={{color:'#C8C8CF'}} />
                            </TouchableOpacity>
                            <ListItem style={styles.CardItem}>
                                <Text style={styles.TitleText}>总数量：</Text>
                                <Text style={styles.ContentText}>20</Text>
                            </ListItem>
                            <ListItem style={styles.CardItem}>
                                <Text style={styles.TitleText}>损耗率：</Text>
                                <Text style={styles.ContentText}>20%</Text>
                            </ListItem>
                            <ListItem style={styles.CardItem}>
                                <Text style={styles.TitleText}>完好数量：</Text>
                                <Text style={styles.ContentText}>16</Text>
                            </ListItem>
                            <ListItem style={styles.CardItem}>
                                <Text style={styles.TitleText}>损坏数量：</Text>
                                <Text style={styles.ContentText}>4</Text>
                            </ListItem>
                            <ListItem style={styles.CardItem}>
                                <Text style={styles.TitleText}>损坏时间：</Text>
                                <Text style={styles.ContentText}>2018-1-12 16:20:00</Text>
                            </ListItem>
                            <ListItem style={styles.CardItem}>
                                <Text style={styles.ContentText}>损坏原因TOP1：</Text>
                                <Text style={styles.ContentText}>设备太low了，赶紧换</Text>
                            </ListItem>
                        </Content>
                    </View>
                </PopupDialog>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScrollView:{
        paddingTop:5,
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0,
        height:'88%'
    },
    BtnPopClose:{
        paddingRight:10,
        alignItems: 'flex-end',
        height:20
    },
    Btndetails:{
        paddingTop:0,
        paddingBottom:0,
        width:200,
        height:66,
        alignItems: 'center',
        justifyContent:"flex-end",
        flexWrap:'nowrap',
        flexDirection:'row',
        flex:1
    },
    CardItem:{
        paddingTop:5,
        paddingBottom:5,
        borderColor:'#fff'
    },
    TitleText:{
        color:'#191F25',
        fontSize:14,
        width:70,
    },
    ContentText:{
        color:'#191F25',
        fontSize:14,
    },
    BottomList:{
        marginLeft:0,
        backgroundColor:'#fff',
        bottom:0,
        borderColor:'#A0A2A5',
    }
})
