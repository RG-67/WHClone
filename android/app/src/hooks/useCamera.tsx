import React from "react";
import { Alert } from 'react-native';
import { RNCamera } from "react-native-camera";


const useCamera = (refRnce: RNCamera | null) => {

    const cameraProxy = (cb: (camera: RNCamera) => void) => {
        if (!refRnce) {
            return () => void 0;
        }
        return () => cb(refRnce);
    };

    const takePicture = async(camera: RNCamera) => {
        try {
            const {uri} = await camera.takePictureAsync();
            Alert.alert("Image", uri);
        } catch (e) {
            console.log("Failed to take pictur", e);
        }
    };

    return {
        takePicture: cameraProxy(takePicture)
    };

};   


export default useCamera;