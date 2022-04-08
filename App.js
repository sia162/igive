import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Image!</Text>
      <Image
        blurRadius={10}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
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
