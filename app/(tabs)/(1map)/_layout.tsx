import { Stack, useNavigation, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootParamList = {
  "(tabs)": undefined;
  home: undefined;
  search: undefined;
  settings: undefined;
};

export default function Layout() {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();
  const router = useRouter();

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
      <Stack.Screen name="index" />
      <Stack.Screen name="user" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 10,
  },
});
