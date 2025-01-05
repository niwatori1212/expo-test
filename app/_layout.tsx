import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="(main)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          //presentation: "modal",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "white", // 背景色を設定
          },
          animation: "slide_from_bottom", // 下からスライド
          headerStyle: {
            backgroundColor: "blue", // ヘッダーの背景色
          },
          presentation: "transparentModal", // 前の画面を暗く表示
        }}
      />
      <Stack.Screen
        name="setting"
        options={{
          // presentation: "modal",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "white",
          },
          animation: "slide_from_bottom",
          headerStyle: {
            backgroundColor: "blue",
          },
          presentation: "transparentModal",
        }}
      />
    </Stack>
  );
}
