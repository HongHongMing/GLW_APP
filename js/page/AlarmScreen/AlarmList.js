import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    RefreshControl
} from 'react-native';
import NavigationBar from '../../common/NavigationBar';
var ITEM_HEIGHT = 100;

export default class AlarmList extends Component {

    _flatList;
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        // var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        var bgColor = '#ffffff';
        return <View style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,marginRight:10,marginLeft:10,marginBottom:10,
            padding:10
        }]}>
            <Text style={styles.txt}>磨边机1设备报警{txt}</Text>
        </View>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }

    // _separator = () => {
    //     return <View style={{height:2,backgroundColor:'yellow'}}/>;
    // }


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
                <View style={{flex:1,paddingTop:10,paddingBottom:0}}>

                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        // ListHeaderComponent={this._header}
                        // ListFooterComponent={this._footer}
                        // ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
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