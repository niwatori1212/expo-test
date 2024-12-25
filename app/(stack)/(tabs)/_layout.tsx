import { Stack, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootParamList = {
  "(tabs)": undefined;
  home: undefined;
  search: undefined;
  settings: undefined;
};

export default function Layout() {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // headerLeft: () =>
        //   navigation.canGoBack() ? (
        //     // 戻れる画面がある場合、戻るボタンを表示
        //     <Pressable onPress={() => navigation.goBack()}>
        //       <Ionicons name="arrow-back" size={24} color="black" />
        //     </Pressable>
        //   ) : (
        //     // 戻れる画面がない場合、ハンバーガーメニューを表示
        //     <Pressable onPress={() => navigation.openDrawer()}>
        //       <Ionicons name="menu" size={24} color="black" />
        //     </Pressable>
        //   ),
        headerTitleAlign: "center", // タイトルを中央揃え
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "Search",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 10,
  },
});
