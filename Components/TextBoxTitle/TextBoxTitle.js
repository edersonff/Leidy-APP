import { StyleSheet } from "react-native";
import ContainerG from "../ContainerG";
import TextBox from "../TextBox";
import Title from "../Title";

export default function TextBoxTitle({title, text, children}){
    return (
        <ContainerG style={styles.container_title_box}> 
            <Title style={styles.title} size={16} weight={'bold'} color={'#101010'}>
                {title}
            </Title>
            <TextBox color='#A3A3A3' size={15}>
                {text}
            </TextBox>
            {children}
        </ContainerG> 
    )
}
const styles = StyleSheet.create({
    title: {
      paddingVertical: 10,
    },
    container_title_box:{
      paddingTop: 10,
    }
});