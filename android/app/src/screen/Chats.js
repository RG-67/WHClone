import React from "react";
import { View, StatusBar, Text, StyleSheet, Image, Dimensions, ScrollView, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomStatusBar from "../component/CustomStatusBar";


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const chatList = [
    {
        id: 1,
        image: require('../asset/man1.png'),
        name: "Chat1",
        message: "Hello chat 1.."
    },
    {
        id: 2,
        image: require('../asset/man2.png'),
        name: "Chat2",
        message: "Hello chat 2.."
    },
    {
        id: 3,
        image: require('../asset/man3.png'),
        name: "Chat3",
        message: "Hello chat 3.."
    },
    {
        id: 4,
        image: require('../asset/woman.png'),
        name: "Chat4",
        message: "Hello chat 4.."
    },
    {
        id: 5,
        image: require('../asset/user.png'),
        name: "Chat5",
        message: "Hello chat 5.."
    },
    {
        id: 6,
        image: require('../asset/man1.png'),
        name: "Chat6",
        message: "Hello chat 6.."
    },
    {
        id: 7,
        image: require('../asset/man2.png'),
        name: "Chat7",
        message: "Hello chat 7.."
    },
    {
        id: 8,
        image: require('../asset/man3.png'),
        name: "Chat8",
        message: "Hello chat 8.."
    },
    {
        id: 9,
        image: require('../asset/woman.png'),
        name: "Chat9",
        message: "Hello chat 9.."
    },
    {
        id: 10,
        image: require('../asset/user.png'),
        name: "Chat10",
        message: "Hello chat 10.."
    },
];

export default function Chats() {
    return (
        <View>
            <ScrollView>
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>WHClone</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 10}}>
                <Image source={require('../asset/camera.png')} style={styles.imageStyle}/>
                <Image source={require('../asset/search.png')} style={styles.imageStyle}/>
                <Image source={require('../asset/more.png')} style={styles.imageStyle}/>
                </View>
            </View>
            <View style={{borderTopWidth: 0.2}}>
            <FlatList
            contentContainerStyle={{paddingBottom: 70}}
            data={chatList}
            renderItem={({item}) => (
                <View style={styles.itemStyle}>
                    <View style={styles.itemImageBorderStyle}>
                    <Image source={item.image} style={styles.itemImageStyle}/>
                    </View>
                    <View style={{marginStart: 20, flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={styles.itemNameStyle}>{item.name}</Text>
                    <Text style={styles.itemMessageStyle}>{item.message}</Text>
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
            />
            </View>
            </ScrollView>
            <TouchableOpacity style={styles.floatBtnStyle}>
                <Image style={styles.floatBtnImageStyle} source={require('../asset/add_contact.png')}/>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {

    },
    headerStyle: {
        height: 60,
        width: "100%",
        backgroundColor: "#000000",
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    imageStyle: {
        height: 25,
        width: 25,
        tintColor: "#ffffff",
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginStart: 20
    },
    textStyle: {
        width: windowWidth/2,
        fontSize: 25,
        color: "#ffffff",
        marginStart: 10,
        alignSelf: 'center',
        marginStart: 10,
        fontWeight: 'bold'
    },
    itemStyle: {
        backgroundColor: "#000000",
        width: windowWidth,
        height: 80,
        flexDirection: 'row',
        padding: 10
    },
    itemImageStyle: {
        height: "100%",
        width: "100%",
        alignSelf: 'center'
    },
    itemNameStyle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemMessageStyle: {
        color: "#808080",
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemImageBorderStyle: {
        height: 50, 
        width: 50, 
        borderRadius: 50, 
        borderWidth: 1, 
        borderColor: "#808080",
        alignContent: 'center', 
        justifyContent: 'center', 
        alignSelf: 'center'
    },
    floatBtnStyle: {
        height: 60,
        width: 60,
        backgroundColor: "#24a110",
        borderRadius: 15,
        alignContent: 'center',
        position: 'absolute',
        justifyContent: 'center',
        marginTop: windowHeight/1.3,
        marginStart: windowWidth/1.3,
        elevation: 10
    },
    floatBtnImageStyle: {
        height: 40,
        width: 40,
        alignSelf: 'center'
    }
})