import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  const router = useRouter();
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  return (
    <Stack
      screenOptions={{
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            // 戻れる画面がある場合、戻るボタンを表示
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
          ) : (
            // 戻れる画面がない場合、ハンバーガーメニューを表示
            <Pressable onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={24} color="black" />
            </Pressable>
          ),
        headerShown: true,
        headerTitleAlign: "center", // タイトルを中央揃え
      }}
    >
      <Stack.Screen name="(top-tabs)" options={{ title: "Top Tabs" }} />
    </Stack>
  );
}
