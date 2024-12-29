import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <Link href="/(main)/(tabs)/(2list)/user">リンク</Link>
      <Text style={styles.text}>Welcome to the stack2 Tab!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
