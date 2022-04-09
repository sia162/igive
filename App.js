import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>
      <View style={{ backgroundColor: "orange", flex: 2 }}></View>
      <View style={{ backgroundColor: "red", flex: 1 }}></View>
      <View style={{ backgroundColor: "green", flex: 1 }}></View>
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
