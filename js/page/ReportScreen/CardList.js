import React, { Component } from 'react';
import{ View,StyleSheet}from 'react-native';
import { Content,Card, CardItem, Text, Icon} from 'native-base';

class CardList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
            <Content>
                <Card style={styles.Card}>
                    <CardItem style={styles.CardItem}>
                        <Text style={styles.TitleText}>流程卡号：</Text>
                        <Text style={styles.ContentText}>E638472649</Text>
                    </CardItem>
                    <CardItem style={styles.CardItem}>
                        <Text style={styles.TitleText}>长*宽*厚：</Text>
                        <Text style={styles.ContentText}>12*13*4</Text>
                    </CardItem>
                    <CardItem style={styles.CardItem}>
                        <Text style={styles.TitleText}>损坏时间：</Text>
                        <Text style={styles.ContentText}>2018-1-12 16:20:00</Text>
                    </CardItem>
                    <CardItem style={styles.CardItem}>
                        <Text style={styles.TitleText}>损坏原因：</Text>
                        <Text style={styles.ContentText}>他老了</Text>
                    </CardItem>
                    <CardItem style={styles.CardItem}>
                        <Text style={styles.TitleText}>备        注：</Text>
                        <Text style={styles.ContentText}>设备太low了，赶紧换</Text>
                    </CardItem>
                </Card>
            </Content>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Card:{
        marginTop:5,
        marginBottom:5,
        marginLeft:10,
        marginRight:10,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:5,
        borderColor:'#fff',
        shadowColor:'#fff',
        borderTopWidth:null,
        borderBottomWidth:null,
        borderLeftWidth:null,
        borderRightWidth:null,
        shadowOpacity:null,
        shadowOffset:null
    },
    CardItem:{
        paddingTop:5,
        paddingBottom:5,
    },
    TitleText:{
        color:'#191F25',
        width:70,
        fontSize:14,
    },
    ContentText:{
        color:'#191F25',
        fontSize:14,
    },
    BottomList:{
        backgroundColor:'#64a539',
        bottom:0,
        height:20
    }
});
export default CardList;