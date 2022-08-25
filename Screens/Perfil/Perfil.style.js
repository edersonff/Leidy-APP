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
  seeMore_container:{
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  rate_list_container_portal:{
    justifyContent:'center',
    alignItems: 'center',
    width: '80%',
    height: '60%',
    backgroundColor: '#fff',
  },
  rate_list_container:{
    justifyContent:'center',
    alignItems: 'center',
  },
  rate_item_type:{
    width: 100,
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 20
  },
  rate_item_type_text:{
    fontSize: 20,
    color: '#222222'
  },
  rate_item_types:{
    height: 50,
  }
});
