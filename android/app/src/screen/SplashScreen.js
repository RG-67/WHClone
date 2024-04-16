import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import App from "./App";
import CustomStatusBar from "../component/CustomStatusBar";


export default function SplashScreen() {
    const navigation = useNavigation();
    const goToTabSCreen = () => {
        navigation.navigate('Tab', {screen: 'Chats'})
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            goToTabSCreen();
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.mainContainer}>
            <CustomStatusBar statusBgColor="#000000"/>
            <Image source={require('../asset/chat.png')} style={styles.imageStyle}/>
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
    imageStyle: {
        width: 80,
        height:80
    }
})