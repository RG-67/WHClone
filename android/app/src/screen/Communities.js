import React from "react";
import { View,Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Communities() {
    return (
        <View style={{backgroundColor: "#000000", flex: 1}}>

        {/* Header View Start */}
        <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Communities</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 10}}>
                <Image source={require('../asset/camera.png')} style={styles.imageStyle}/>
                <Image source={require('../asset/more.png')} style={styles.imageStyle}/>
                </View>
            </View>
        {/* Header View End */}

        {/* Community View Start */}
        <View style={styles.comViewContainer}>
            <Image style={styles.comImage} source={require('../asset/communities.png')}/>
            <Text style={styles.comHeadingText}>Stay connected with the community</Text>
            <Text style={styles.comText}>Communities on WhatsApp bring members together in topic-based groups and make it easy to get admin announcements. 
            Any community you're added to will appear here.
            </Text>
            <Text style={styles.seeComExample}>See example communities {'>'}</Text>
            <TouchableOpacity style={styles.comBtn}>
                <Text style={styles.comBtnText}>Start your community</Text>
            </TouchableOpacity>
        </View>
        {/* Community View End */}

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
    comViewContainer: {
        borderTopWidth: 1,
        borderTopColor: "#808080"
    },
    comImage: {
        height: 150,
        width: 150,
        backgroundColor: "#9fc29d",
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    comHeadingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#ffffff",
        alignSelf: 'center',
        marginBottom: 10
    },
    comText: {
        fontSize: 14,
        fontWeight: 'normal',
        alignSelf: 'center',
        color: "#ffffff",
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    seeComExample: {
        color: "#24a110",
        fontWeight: 'normal',
        fontSize: 14,
        alignSelf: 'center',
        marginBottom: 50
    },
    comBtn: {
        width: windowWidth/1.2,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#24a110",
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    comBtnText: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000000"
    }
})