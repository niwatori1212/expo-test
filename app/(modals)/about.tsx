import { View, Text, Button, Modal } from "react-native";
import { useRouter } from "expo-router";

export default function AboutModal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>このアプリについて</Text>
      <Button title="閉じる" onPress={() => router.back()} />
    </View>
  );
}
