import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="click me"
        onPress={() => console.log("button pressed")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
