import { Animated, StyleSheet } from "react-native";
import { colors } from '../../styles/base';
export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btns_container: {
        height: '50%',
        minWidth: '80%',
        justifyContent: 'space-evenly'
    },
    form:{
        height: '70vh',
        backgroundColor: colors.bg,
        position: 'absolute',
        bottom: '-70vh',
        width: '100%',
        borderRadius: '10px',
    },
})