import { useState } from "react";
import { StyleSheet, View } from "react-native";
import HorizontalScroll from "../../HorizontalScroll";
import MenuOption from "../../MenuOption";
export default function MenuSelect(){

    const [menuSelect, setMenuSelect] = useState(0);
    
    const menu = [{title: 'Limpeza'},{title: 'Lavação'},{title: 'Limpeza'},{title: 'Lavação'}]
    return(
        <HorizontalScroll style={styles.horizontalMenu} marginTop={13}>
            {menu.map((el, index)=>{
                return(
                    <MenuOption id={index} key={index} text={el.title} selected={[menuSelect, setMenuSelect]} first={index==0} />
                )
            })}
            <View style={[{left: menuSelect*100},styles.horizontalMenuSelector]}></View>
        </HorizontalScroll>
    )
}
const styles = StyleSheet.create({
    horizontalMenuSelector:{
      width: 100,
      height: 2,
      backgroundColor: 'blue',
      position: 'absolute',
      bottom: 0
    },
    horizontalMenu:{
      position: 'relative',
    }
})