import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../common/NavigationBar';
import AlarmCell from './AlarmCell';
import {AlarmFilter} from './AlarmFilter'
var ITEM_HEIGHT = 85;

export default class AlarmList extends Component {

    _flatList;
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    // _renderItem = (item) => {
    //     var txt = '第' + item.index + '个' + ' title=' + item.item.title;
    //     // var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
    //     var bgColor = '#ffffff';
    //     return <TouchableOpacity> <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,marginRight:10,marginLeft:10,marginBottom:10,
    //         padding:10,borderRadius:5
    //     }]}>
    //         <Text style={styles.txt}>磨边机1设备报警</Text>
    //         <View style={{borderColor:'#F1F1F1',borderWidth:1,marginTop:15,marginBottom:5}}></View>
    //         <View style={{justifyContent:'space-between',flexDirection:'row'}}>
    //             <Text>时间：2017-12-25 16:30</Text>
    //             <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
    //                 <Text>状态：</Text><Text>未确认未恢复</Text>
    //             </View>
    //         </View>
    //     </View></TouchableOpacity>
    // }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height:10,backgroundColor:'#e9e9ef'}}/>;
    }


    _onRefresh() {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }
    async fetchData() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson.movies;
        } catch(error) {
            console.error(error);
        }
    }

    _clickItem = (item) => {
        const {navigate} = this.props.navigation;
        console.log('促发了');
        // navigate('AlarmFilter', {linkUrl: item.linkUrl, title: item.title});
        navigate('AlarmScreen_detail');
    }

    render() {
        var data = [];
        for (var i = 0; i < 20; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex:1}}>
                <NavigationBar title={'报警中心'} style={{backgroundColor:'#3396FB'}} />
                {/*<Button title='滚动到指定位置' onPress={()=>{*/}
                    {/*//this._flatList.scrollToEnd();*/}
                    {/*// this._flatList.scrollToIndex({viewPosition:0,index:8});*/}
                    {/*// this._flatList.scrollToOffset({animated: true, offset: 2000});*/}
                {/*}}/>*/}
                <View style={{height:'80%',paddingTop:10,paddingBottom:0,paddingLeft:10,paddingRight:10}}>

                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        // ListHeaderComponent={this._header}
                        // ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={ ({item, index}) => (
                            <AlarmCell itemInfo = {item}
                                      //click = {() => {this._clickItem(item);}}屏蔽点击事件
                                       click={()=>{this._clickItem(item)}}
                            />
                        )}
                        refreshControl= { <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />}
                        //numColumns ={3}
                        //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        //getItemLayout={(data,index)=>(
                        //{length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
                        //)}

                        //onEndReachedThreshold={5}
                        //onEndReached={(info)=>{
                        //console.warn(info.distanceFromEnd);
                        //}}

                        //onViewableItemsChanged={(info)=>{
                        //console.warn(info);
                        //}}
                        data={data}>
                    </FlatList>
                </View>
                <View>
                    <AlarmFilter/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10
    },
    txt: {
        textAlign: 'left',
        textAlignVertical: 'center',
        color: '#000000',
        fontSize: 18,
    }
});
module.exports = {
    AlarmList
}