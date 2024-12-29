import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function ModalLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        presentation: "modal",
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="about" options={{ title: "このアプリについて" }} />
      <Stack.Screen name="inquiry" options={{ title: "お問い合わせ" }} />
    </Stack>
  );
}
