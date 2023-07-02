import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    //   marginHorizontal:20,
    marginTop: 25,
    //   borderWidth:1,
    //   borderRadius: 10,
  },
  list: {
    // flex:1,
    gap: 15,
    paddingBottom: 20,
  },
});
