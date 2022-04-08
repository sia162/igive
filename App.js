import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="click me"
        onPress={() =>
          Alert.alert("i am title", "my message is here", [
            { text: "Yes", onPress: () => console.log("yes pressed") },
            { text: "No", onPress: () => console.log("no pressed") },
          ])
        }
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
