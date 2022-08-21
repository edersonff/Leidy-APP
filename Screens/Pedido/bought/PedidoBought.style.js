import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container_pedidos: {
    flex: 1,
    width: '100%'
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
  price_container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price:{
    color: '#000',
    fontSize: 24,
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
  imageUpload:{
    width: '100%',
    height: 266,
    justifyContent: 'center',
    alignItems: 'center'
  },
  downloadIcon:{
    rotation: 180
  }
});
