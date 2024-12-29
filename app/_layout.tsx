import { DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false, // アプリ全体のヘッダーを表示
        drawerStyle: {
          width: 200, // ドロワーの幅
        },
      }}
      // カスタムドロワーコンテンツ
      drawerContent={(props) => (
        <View style={{ flex: 1 }}>
          {/* ドロワーのヘッダー */}
          <View>
            <Text>メニュー</Text>
          </View>
          {/* ドロワーのリスト */}
          <DrawerItem
            label="このアプリについて"
            onPress={() => router.push("/(modals)/about")}
          />
          <DrawerItem
            label="お問い合わせ"
            onPress={() => router.push("/(modals)/inquiry")}
          />
        </View>
      )}
    ></Drawer>
  );
}
