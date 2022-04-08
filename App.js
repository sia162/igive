import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={() => console.log("text pressed")}>
        Hello World! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis rerum amet sed dolor harum, earum consectetur ex debitis a
        officiis.
      </Text>
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
