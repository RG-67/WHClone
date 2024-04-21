import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import {RNCamera} from 'react-native-camera';
import useCallBackRef from "../hooks/useCallBackRef";
import CameraService from "../service/CameraService";
import useCamera from "../hooks/useCamera";
import { useCameraDevice, Camera } from "react-native-vision-camera";

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
        {/* <RNCamera
        ratio={'16:9'}
        ref={callbackRef}
        type={cameraType}
        style={styles.cameraContainer}
        > */}
            {/* <View style={styles.topViewContainer}> */}
            {/* Header View Start */}
            {/* <View style={styles.header}>
                <Image style={styles.backBtnStyle} source={require('../asset/close.png')}/>
                <Image style={styles.flashBtnStyle} source={require('../asset/flash.png')}/>
            </View> */}
            {/* Header View End */}
            {/* Footer View Start */}
            {/* <View style={styles.footer}>

            </View> */}
            {/* Footer View End */}
            {/* </View> */}

        {/* </RNCamera> */}
        
        <Camera
        style={{height: 150, width: 150}}
        device={device}
        isActive={true}
        />

        </View>
    )
}

export default CameraView;


const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // flexDirection: 'column',
        // backgroundColor: "#000000"
    },
    cameraContainer: {
        // flex: 1,
        justifyContent: 'center',
        height: 250,
        width: windowWidth,
        // backgroundColor: "#000000"
    },
    topViewContainer: {
        flex: 1,
        backgroundColor: "#000000"
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
        height: 20,
        width: 20,
        tintColor: "#ffffff"
    },
    flashBtnStyle: {
        height: 25,
        width: 25,
        tintColor: "#ffffff"
    }
})