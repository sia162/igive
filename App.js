import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "grey", flex: 1, flexDirection: "row" }}>
      <View
        style={{ backgroundColor: "orange", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
