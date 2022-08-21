import React, { useEffect, useRef } from 'react';
import { Text, View, Image, Animated, Dimensions } from 'react-native';
import styles from './Loading.style'
import loading from '../../img/Water-fall.gif'
import { navigate } from '../../Components/Util/navigation';

export default function Loading() {
    const size = useRef(new Animated.Value(0)).current;
    const opac = useRef(new Animated.Value(0)).current;
    const d = (func, d)=>{
        return setTimeout(func, d);
    }
    const changeAnim = (to, anim)=>{
        Animated.timing(
            anim, {
              toValue: to,
              duration: 700,
              useNativeDriver: true,
            })
        .start();
    }
    useEffect(()=>{
        d(()=>{
            changeAnim((Dimensions.get('window').height/10)*1.25, size);

            d(()=>{ 
                changeAnim(1, opac);
                
                d(()=>{ navigate('Login'); }, 500);                
            }, 100);
            
        }, 820)
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image style={styles.image} source={loading} />
            </View>
            <View style={styles.circle_container}>
                <Animated.Text style={[styles.title,{opacity: opac}]}>App name</Animated.Text>
                <Animated.View style={[styles.circle, {scaleX:size, scaleY:size}]} />
            </View>
        </View>
    );
}