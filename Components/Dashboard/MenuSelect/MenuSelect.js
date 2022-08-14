import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import HorizontalScroll from "../../HorizontalScroll";
import MenuOption from "../../MenuOption";
export default function MenuSelect(){

    const [menuSelect, setMenuSelect] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const changeAnim = (to)=>{
        Animated.timing(
            fadeAnim,
            {
              toValue: to*100,
              duration: 70,
              useNativeDriver: true,
            }
          ).start();
    }

    const menu = [{title: 'Limpeza'},{title: 'Lavação'},{title: 'Limpeza'},{title: 'Lavação'}]
    return(
        <HorizontalScroll style={styles.horizontalMenu} marginTop={13}>
            {menu.map((el, index)=>{
                return(
                    <MenuOption id={index} change={changeAnim} key={index} text={el.title} selected={[menuSelect, setMenuSelect]} first={index==0} />
                )
            })}
            <Animated.View animation="fadeInUp" testId='FilmsContainer' style={[styles.horizontalMenuSelector, {transform:[{translateX: fadeAnim}]}]} />
        </HorizontalScroll>
    )
}
const styles = StyleSheet.create({
    horizontalMenuSelector:{
      width: 100,
      height: 2,
      backgroundColor: 'blue',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    horizontalMenu:{
      position: 'relative',
    }
})