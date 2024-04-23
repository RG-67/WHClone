import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {RNCamera} from 'react-native-camera';
import useCallBackRef from "../hooks/useCallBackRef";
import CameraService from "../service/CameraService";
import useCamera from "../hooks/useCamera";
import { useCameraDevice, Camera} from "react-native-vision-camera";

const cameraService = new CameraService();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CameraView = () => {
    const navigation = useNavigation();
    const [flashType, setFlash] = useState(RNCamera.Constants.Type.flashType);
    const [cameraType, setCamera] = useState(RNCamera.Constants.Type.back);
    const {refRnce, callbackRef} = useCallBackRef();
    const {takePicture} = useCamera(refRnce);
    const device = useCameraDevice('back');

    
    return (
        <View style={styles.mainContainer}>
    
        {/* Camera Container View Start */}
        <View style={styles.cameraContainer}>
        <Camera
        style={styles.cameraStyle}
        device={device}
        isActive={true}>
        </Camera>
        <View style={styles.topViewContainer}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}>
            <Image style={styles.backBtnStyle} source={require('../asset/close.png')}/>
            </TouchableOpacity>
            <Image style={styles.flashBtnStyle} source={require('../asset/flash.png')}/>
        </View>

        {/* Bootom Container View Start */}
        <View style={styles.bottomViewContainer}>
            <TouchableOpacity style={styles.bottomViewImageStyle}>
            <Image style={{width: 20, height: 20, tintColor: "#ffffff"}} source={require('../asset/gallery.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureBtn}/>
            <TouchableOpacity style={styles.bottomViewImageStyle}>
            <Image style={{width: 20, height: 20, tintColor: "#ffffff"}} source={require('../asset/reverse.png')}/>
            </TouchableOpacity>
        </View>
        {/* Bootom Container View End */}
        </View>
        {/* Camera Container View End */}

        </View>
    )
}

export default CameraView;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000000"
    },
    cameraContainer: {
        flex: 1
    },
    topViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    },
    header: {
        flex: 1,
        backgroundColor: "#000000",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {

    },
    backBtnStyle: {
        height: 16,
        width: 16,
        tintColor: "#ffffff"
    },
    flashBtnStyle: {
        height: 22,
        width: 22,
        tintColor: "#ffffff"
    },
    cameraStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    bottomViewContainer: {
        flexDirection: 'row',
        bottom: 50,
        top: windowHeight/1.4,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    btmComponentStyle: {

    },
    captureBtn: {
        width: 50,
        height: 50,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        
    },
    bottomViewImageStyle: {
        width: 50, 
        height: 50, 
        borderRadius: 50, 
        backgroundColor: "#1b1c1b", 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})