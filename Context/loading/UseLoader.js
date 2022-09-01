import { useState } from "react"
import { ActivityIndicator, Image, Pressable, StyleSheet, View } from "react-native"

const UseLoader = (type) => {
    const [ load, setLoad ] = useState(false);
    return[
        load ?  <Pressable style={styles.loading} pointerEvents={'none'}>
                  {type ?? 
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size={70} />
                  </View>
                  }
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
    backgroundColor: 'rgba(0,0,0, 0.05)',
  },
  image:{
    resizeMode: 'contain',
    width: '50%'
  },
  loadingContainer:{
    padding: 20,
    // backgroundColor: '#fff',
    borderRadius: 18,
  }
})

export default UseLoader;