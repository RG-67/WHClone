import React, { useCallback, useState } from "react";
import {} from 'react-native';



const useCallBackRef = () => {
    const [ref, setRef] = useState(null);

    let callbackRef = useCallback(node => {
        if (node) {
            setRef(node);
        }
    }, []);
    return {ref, callbackRef};
};

export default useCallBackRef;