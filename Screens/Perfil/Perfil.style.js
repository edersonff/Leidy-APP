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
    justifyContent: 'space-between'
  },
  price_container:{
    alignItems: 'center'

  },
  price:{
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  },
  bonus:{
    color: '#219A60',
    fontSize: 15,
    marginHorizontal: 10,
  },
  maps:{
    width: '100%',
    height: 200,
    resizeMode: "cover",
  },
  icons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  important_values:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  content:{ 
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40, 
    position: 'relative',
    bottom: 35,
    backgroundColor: '#fff'
  },
  seeMore_container:{
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  rate_list_container_portal:{
    justifyContent:'center',
    alignItems: 'center',
    width: '85%',
    height: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  rate_list_container:{
    justifyContent:'center',
    alignItems: 'center',
  },
  rate_item_type:{
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 20,
    backgroundColor: '#ddd'
  },
  rate_item_type_text:{
    fontSize: 20,
    color: '#222222'
  },
  rate_item_types:{
    height: 50,
  }
});
