import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';



const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const StatusItem = [
    {
        id: 1,
        image: require('../asset/man1.png'),
        name: "Name1",
        time: "20 minutes age"
    },
    {
        id: 2,
        image: require('../asset/man2.png'),
        name: "Name2",
        time: "25 minutes age"
    }
]

const ChannelItem = [
    {
        id: 1,
        image: require('../asset/chat.png'),
        channelName: "WHClone"
    },
    {
        id: 2,
        image: require('../asset/man1.png'),
        channelName: "Channel 1"
    },
    {
        id: 3,
        image: require('../asset/man2.png'),
        channelName: "Channel 2"
    },
    {
        id: 4,
        image: require('../asset/man3.png'),
        channelName: "Channel 3"
    },
    {
        id: 5,
        image: require('../asset/woman.png'),
        channelName: "Channel 4"
    }
]

export default function Updates() {

    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: "#000000", flex: 1, paddingBottom: 100}}>

            {/* Header View */}
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Updates</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 10}}>
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => navigation.navigate('CameraView')}>
                <Image source={require('../asset/camera.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                <Image source={require('../asset/search.png')} style={styles.imageStyle}/>
                <Image source={require('../asset/more.png')} style={styles.imageStyle}/>
                </View>
            </View>

            <ScrollView>

                {/* Status View */}
                <View style={{borderTopWidth: 0.2, borderBottomWidth: 0.2, borderColor: "#808080"}}>
                    <View style={styles.statusCard}>
                        <Text style={styles.statusText}>Status</Text>
                        <Image style={styles.statusImage} source={require('../asset/more.png')}/>
                    </View>

                    <View style={styles.myStatusTextCard}>
                        <View style={{marginTop: 10}}>
                        <Image style={{width: 55, height: 55, borderRadius: 50, marginStart: 10}} source={require('../asset/user.png')}/>
                        <View style={styles.addStatusImage}>
                        <Image style={{width: "100%", height: "100%", tintColor: "#24a110"}} source={require('../asset/add.png')}/>
                        </View>
                        </View>

                        <View style={{marginTop: 20, marginStart: 15}}>
                            <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 15}}>My Status</Text>
                            <Text style={{color: "#808080", fontWeight: 'normal', fontSize: 14}}>Tap to add status update</Text>
                        </View>
                    </View>

                    <Text style={{color: "#808080", fontSize: 12, fontWeight: 'bold', marginStart: 10}}>Recent updates</Text>
                    <FlatList
                    marginTop={10}
                    data={StatusItem}
                    renderItem={({item}) => (
                        <View style={{flexDirection: 'row', marginBottom: 15, alignContent: 'center', justifyContent: 'center', flex: 1}}>
                        <View style={{width: 55, height: 55, borderRadius: 50, borderWidth: 2.2, borderColor: "#24a110", marginStart: 10}}>
                            <Image source={item.image} style={{width: "100%", height: "100%"}}/>
                        </View>
                        <View style={{marginStart: 15, alignContent: 'center', flex: 1, justifyContent: 'center'}}>
                            <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
                            <Text style={{color: "#808080", fontWeight: 'normal', fontSize: 14}}>{item.time}</Text>
                        </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    />
                </View>

                {/* Channnel View */}
                <View>
                    <View style={styles.statusCard}>
                        <Text style={styles.statusText}>Channels</Text>
                        <Image style={{height: 15, width: 15, tintColor: "#ffffff", alignSelf: 'flex-end', marginStart: 12, marginBottom: 10, alignSelf: 'center', justifyContent: 'center'}} 
                        source={require('../asset/plus.png')}/>
                    </View>
                    <Text style={{color: "#808080", fontWeight: 'normal', fontSize: 14, marginStart: 15}}>Stay updated on topics that matter to you. Find channels to follow below.
                    </Text>
                    <FlatList
                    contentContainerStyle={{paddingVertical: 20}}
                    horizontal
                    marginHorizontal={10}
                    data={ChannelItem}
                    renderItem={({item}) => (
                        <View style={styles.channelCard}>
                            <Image source={item.image} style={{height: 80, width: 80, borderRadius: 50, alignSelf: 'center', borderWidth: 0.5, borderColor: "#808080"}}/>
                            <View style={styles.channelCheckCard}>
                            <Image source={require('../asset/check.png')} style={styles.channelCheck}/>
                            </View>
                            <Text style={{color: "#ffffff", alignSelf: 'center', fontSize: 14, fontWeight: 'bold'}}>{item.channelName}</Text>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={{color: "#f7f4eb", fontSize: 14, fontWeight: 'bold', alignSelf: 'center'}}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    />
                    <TouchableOpacity style={{width: 120, height: 38, backgroundColor: "#24a110", borderRadius: 20, flex: 1, alignContent: 'center', justifyContent: 'center', marginStart: 15}}>
                        <Text style={{color: "#000000", fontSize: 13, fontWeight: 'bold', alignSelf: 'center'}}>Explore more</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <TouchableOpacity style={styles.edtFloatBtnStyle}>
                <Image style={styles.edtFloatBtnImageStyle} source={require('../asset/pencil.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatBtnStyle} onPress={() => navigation.navigate('CameraView')}>
                <Image style={styles.floatBtnImageStyle} source={require('../asset/camera_btn.png')}/>
            </TouchableOpacity>
        </View>
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
    statusCard: {
        flexDirection: 'row',
        flex: 1,
        width: "100%",
        marginTop: 20,
        justifyContent: 'center'
    },
    statusText: {
        width: windowWidth/1.2,
        fontSize: 18,
        color: "#ffffff",
        fontWeight: 'bold'
    },
    statusImage: {
        height: 25,
        width: 25,
        tintColor: "#ffffff",
        alignSelf: 'flex-end',
        marginStart: 12,
        marginBottom: 10
    },
    myStatusTextCard: {
        flexDirection: 'row'
    },
    addStatusImage: {
        width: 22, 
        height: 22, 
        backgroundColor: "#000000", 
        borderRadius: 50, 
        transform: [
            {translateX: 44}, 
            {translateY: -22}, 
            {scale: 1}
        ]
    },
    channelCard: {
        width: 120,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#808080",
        marginHorizontal: 2,
        padding: 10
    },
    channelCheckCard: {
        height: 25,
        width: 25,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#000000",
        transform: [
            {translateX: 60}, 
            {translateY: -22}, 
            {scale: 1}
        ],
        backgroundColor: "#000000"
    },
    channelCheck: {
        width: "100%", 
        height: "100%"
    },
    followBtn: {
        height: 25,
        width: 90,
        backgroundColor: "#293b2e",
        borderRadius: 15,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10
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
        height: 30,
        width: 30,
        alignSelf: 'center'
    },
    edtFloatBtnStyle: {
        height: 35,
        width: 35,
        backgroundColor: "#808080",
        borderRadius: 10,
        alignContent: 'center',
        position: 'absolute',
        justifyContent: 'center',
        marginTop: 480,
        marginStart: 290,
        elevation: 10
    },
    edtFloatBtnImageStyle: {
        height: 15,
        width: 15,
        alignSelf: 'center',
        tintColor: "#ffffff"
    }
})