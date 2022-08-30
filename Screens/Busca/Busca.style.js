import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container_searchs: {
    height: '100%',
    width: "100%",
    padding: 20,
  },
  searchbar_container: {
    width: "70%",
    height: 60,
    marginBottom: 10
  },
  search_container:{
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: 'row',
    padding: 20,
    minHeight: 150,
    height: '10%',
    backgroundColor: 'red',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  search_result: {
    width: "100%",
    minHeight: '80%'
  },
  search_input: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 30,
    borderRadius: 12,
  },
  button_search:{
    backgroundColor: '#fff',
    width: '20%',
    height: 65,
    borderRadius: 12,
  }
});
