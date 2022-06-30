import { StyleSheet } from "react-native";
import { colors } from '../../styles/base'
export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btns_container: {
        height: '50%',
        minWidth: '70%',
        justifyContent: 'space-between'
    },
    btn:{
        padding: '20px',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    btn_text:{
        color: colors.primary,
        fontWeight: 600,
        
    }
})