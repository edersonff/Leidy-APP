import { Pressable, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native'

export default function MenuOption({text, selected, color = 'blue', first, last, id, change}){
    
    return(
        <Pressable onPress={()=>{change(id),selected[1](id)}} style={[{marginLeft: first ? 0 : 'auto', marginRight: last ? 0 : 'auto' }, styles.container]}>
            <MenuNav>
                <TextNav style={{color: selected[0] == id ? color : 'gray'}}>{text}</TextNav>
            </MenuNav>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        fontSize: 24,
    }
});
const MenuNav = styled.View`
outlineStyle: none;
padding-bottom: 13px;
width: 100px;
textAlign: left;
`
const TextNav = styled.Text`
font-size: 12px;
text-align: center;
font-weight: normal;
`