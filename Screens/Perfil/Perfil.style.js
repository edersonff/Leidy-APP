import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container_pedidos: {
    flex: 1,
    width: '100%',
  },
  title_container:{
    backgroundColor: '#F2F2F2',
  },
  main_status:{
    paddingBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  type_perfil:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  type_perfil_text:{
    color: '#000',
    fontSize: 20,
    fontWeight: '100'
  },
  maps:{
    width: '100%',
    height: 200,
    resizeMode: "cover",
  },
});
