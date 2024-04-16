import React from "react";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomStatusBar from "../component/CustomStatusBar";


export default function Chat() {
    return (
        <View style={styles.mainContainer}>
            <CustomStatusBar statusBgColor={'#000000'}/>
            <Text style={styles.textStyle}>Chat Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 15,
        color: '#ffffff'
    }
})