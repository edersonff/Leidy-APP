import { useState } from "react"
import { ActivityIndicator, Image, Pressable, StyleSheet } from "react-native"

const UseLoader = (type) => {
    const [ load, setLoad ] = useState(false);
    return[
        load ?  <Pressable style={styles.loading} pointerEvents={'none'}>
                  {type ? <Image style={styles.image} source={type} /> : <ActivityIndicator size={70} />}
                </Pressable> : null,
        () => setLoad(!load),
    ];
}
const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    resizeMode: 'contain',
    width: '50%'
  }
})

export default UseLoader;