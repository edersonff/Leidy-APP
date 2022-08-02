import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container_searchs: {
    height: '100%',
    width: "100%",
    padding: 20,
  },
  container_search: {
    width: "100%",
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  search_result: {
    width: "100%",
    minHeight: '80%'
  },
  search_input: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    fontSize: 30
  }
});
