import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <View
        style={{ backgroundColor: "orange", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "yellowgreen", width: 100, height: 100 }}
      />
      <View style={{ backgroundColor: "blue", width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: "pink", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "black", width: 100, height: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "purple", width: 100, height: 100 }}
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
