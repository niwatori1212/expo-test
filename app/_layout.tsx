import { DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false, // ドロワーメニューでの親ヘッダーを非表示
      }}
    >
      <Drawer.Screen
        name="(stack)"
        // options={{
        //   drawerLabel: "Tabs",
        //   headerShown: false, // タブ内で独自のヘッダーを管理
        // }}
      />
      <Drawer.Screen name="settings" options={{ drawerLabel: "Settings" }} />
    </Drawer>
  );
}
