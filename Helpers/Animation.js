import { useRef } from 'react';
import { Animated } from "react-native";
export default Animation = (from, to, duration = 1000) => {
    let init;
    function setValue(to){
        init = Animated.timing(anim, {toValue: to, duration, useNativeDriver: false}).start();
    }
    
    const anim = useRef(new Animated.Value(from)).current
    setValue(to);
    return {anim, init, setValue};
}