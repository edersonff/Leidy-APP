import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container_searchs: {
    height: '100%',
    width: "100%",
    padding: 20,
  },
  searchbar_container: {
    width: "75%",
    height: 60,
    marginBottom: 10,
  },
  header:{
    height: '10%',
    minHeight: 150,
    justifyContent: 'center',
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#9949CA',
  },
  search_container:{
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
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
    height: 60,
    borderRadius: 12,
  }
});
