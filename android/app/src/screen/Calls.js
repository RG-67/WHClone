import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const CallItem = [
    {
        id: 1,
        callImage: require('../asset/man1.png'),
        callerName: "Man1",
        callTypeImg: require('../asset/incoming_call.png'),
        callTiming: "15 April, 6:00 pm"
    },
    {
        id: 2,
        callImage: require('../asset/man2.png'),
        callerName: "Man2",
        callTypeImg: require('../asset/incoming_call.png'),
        callTiming: "15 April, 6:01 pm"
    },
    {
        id: 3,
        callImage: require('../asset/man3.png'),
        callerName: "Man3",
        callTypeImg: require('../asset/incoming_call.png'),
        callTiming: "15 April, 6:02 pm"
    },
    {
        id: 4,
        callImage: require('../asset/woman.png'),
        callerName: "Woman",
        callTypeImg: require('../asset/incoming_call.png'),
        callTiming: "15 April, 6:03 pm"
    },
    {
        id: 5,
        callImage: require('../asset/user.png'),
        callerName: "User",
        callTypeImg: require('../asset/incoming_call.png'),
        callTiming: "15 April, 6:04 pm"
    }
]

export default function Calls() {
    return (
        // Main View Start
        <View style={{backgroundColor: "#000000", flex: 1, paddingBottom: 100}}>

            {/* Header View Start */}
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Calls</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 10}}>
                <Image source={require('../asset/camera.png')} style={styles.imageStyle}/>
                <Image source={require('../asset/search.png')} style={styles.imageStyle}/>
                <Image source={require('../asset/more.png')} style={styles.imageStyle}/>
                </View>
            </View>
            {/* Header View End */}

            {/* Call Container View Start */}
            <View>
                <ScrollView>

                    {/* Call Container Child View Start */}
                    <View style={{borderTopColor: "#808080", borderTopWidth: 1, borderBottomColor: "#808080", borderBottomWidth: 1}}>
                        {/* Share Link View Start */}
                        <View style={{flexDirection: 'row', marginBottom: 15, alignContent: 'center', justifyContent: 'center', flex: 1, marginTop: 10}}>
                        <View style={{width: 55, height: 55, marginStart: 10, backgroundColor: "#24a110", borderRadius: 50, alignContent: 'center', justifyContent: 'center'}}>
                            <Image source={require('../asset/link.png')} style={{width: 25, height: 25, alignSelf: 'center'}}/>
                        </View>
                        <View style={{marginStart: 15, alignContent: 'center', flex: 1, justifyContent: 'center'}}>
                            <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 15}}>Create call link</Text>
                            <Text style={{color: "#808080", fontWeight: 'normal', fontSize: 14}}>Share a link for your WHClone call</Text>
                        </View>
                        </View>
                        {/* Share Link View End */}

                        {/* Call List View Start */}
                        <View>
                            <Text style={{color: "#ffffff", fontSize: 16, fontWeight: 'normal', marginStart: 10}}>Recent</Text>
                            <FlatList
                            data={CallItem}
                            renderItem={({item}) => (
                            <View style={styles.itemStyle}>
                                <View style={styles.itemImageBorderStyle}>
                                    <Image source={item.callImage} style={styles.itemImageStyle}/>
                                </View>
                                <View style={{marginStart: 20, flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                    <Text style={styles.itemNameStyle}>{item.callerName}</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Image style={{width: 15, height: 15, tintColor: "#24a110", alignSelf: 'center', marginEnd: 5}} source={item.callTypeImg}/>
                                        <Text style={styles.itemMessageStyle}>{item.callTiming}</Text>
                                    </View>
                                </View>
                                <Image style={{height: 20, width: 20, tintColor: "#24a110", alignSelf: 'flex-end', alignSelf: 'center', marginEnd: 10}} source={require('../asset/call.png')}/>
                            </View>
                            )}
                            keyExtractor={item => item.id}
                            />
                        </View>
                        {/* Call List View End */}

                        </View>
                    {/* Call Container Child View End */}

                    <View style={{flexDirection: 'row', flex: 1, alignContent: 'center', justifyContent: 'center', marginVertical: 10}}>
                        <Image style={{height: 10, width: 10, tintColor: "#808080", alignSelf: 'center', marginEnd: 5}} source={require('../asset/lock.png')}/>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: "#808080", alignSelf: 'center'}}>Your personal calls are </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: "#24a110", alignSelf: 'center'}}>end-to-end-encrypted</Text>
                    </View>

                </ScrollView>
            </View>
            {/* Call Container View End */}

            {/* FloatBtn Start */}
            <TouchableOpacity style={styles.floatBtnStyle}>
                <Image style={styles.floatBtnImageStyle} source={require('../asset/calling.png')}/>
            </TouchableOpacity>
            {/* FloatBtn End */}

            </View>
            // Main View End
    )
}



const styles = StyleSheet.create({
    headerStyle: {
        height: 60,
        width: "100%",
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    textStyle: {
        width: windowWidth/2,
        fontSize: 20,
        color: "#ffffff",
        marginStart: 10,
        alignSelf: 'center',
        marginStart: 10,
        fontWeight: 'normal'
    },
    imageStyle: {
        height: 25,
        width: 25,
        tintColor: "#ffffff",
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginStart: 20
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
        fontWeight: 'normal'
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
        height: 25,
        width: 25,
        alignSelf: 'center'
    }
})