import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { ActivityIndicator, Animated, Image, Pressable, StyleSheet, Text, View } from "react-native"

const useError = () => {
    const [ text, setText ] = useState('');
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      changeAnim(1);

      changeAnim(opacity, 0, 1000, 2000);
    }, [text]);

    const changeAnim = (anim, to, duration, delay)=>{
      Animated.timing(
          anim,
          {
            toValue: to,
            useNativeDriver: true,
            duration,
          }
        ).start();
    } 
    return[
        ( 
          <Animated.View style={[styles.container, {opacity}]} pointerEvents={'none'}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Erro: </Text>
            <Text style={styles.text}>{text}</Text>
          </Animated.View>
        ),
        (text) => setText(text)
    ];
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 100,
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
  },
  text:{
    color: '#fff',
    fontSize: 18,
  }
})

export default useError;