import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={containerstyle}>
      <Button
        color="orange"
        title="click me"
        onPress={() =>
          Alert.prompt("my title", "my message", (text) => console.log(text))
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerstyle = { backgroundColor: "orange" };
