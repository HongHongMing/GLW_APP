import React, { Component } from "react";
import { View, StyleSheet,TouchableOpacity,Image,ScrollView,Text } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import NavigationBar from '../../common/NavigationBar';
const Dimensions = require('Dimensions');
class BanBie extends Component {
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
    render() {
        const ScreenHeight = Dimensions.get('window').height;
        const tableHead = ['生产日期', '班别','操作工' , '实际产能(平方)','实际工时','理论工时','达成率(%)','良品率(%)'];
        const tableData = [
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['1', '2', '3', '4','5','6','7','8'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
            ['a', 'b', 'c', 'd','e','f','g','h'],
        ];
        return (
            <View>
                <NavigationBar
                    title={'生产班组产能效率统计表'} style={{backgroundColor:'#488aff'}}
                    leftButton={this.renderButton(require('../../../res/images/ic_arrow_back_white_36pt.png'))}
                    statusBar={{backgroundColor:'#488aff'}}
                />
                <View style={styles.container}>
                    <ScrollView
                        horizontal={true}
                    >
                    <Table>
                        <Row data={tableHead} style={styles.head} textStyle={styles.text} widthArr={[100,100,100,100,100,100,100,100]}/>
                        <ScrollView style={{height:ScreenHeight-150}}>
                            <Rows data={tableData} style={styles.row} textStyle={styles.text} widthArr={[100,100,100,100,100,100,100,100]}/>
                        </ScrollView>
                    </Table>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding:10
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5 },
    row: { height: 30 }
})
export default BanBie