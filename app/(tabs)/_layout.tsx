import { Tabs } from "expo-router";
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
        headerShown: true,
        headerLeft: () => (
          <Pressable
            onPress={() => {
              navigation.openDrawer(); // ドロワーを開く
            }}
            style={styles.menuButton}
          >
            <Ionicons name="menu" size={24} color="black" />
          </Pressable>
        ),
        headerTitleAlign: "center", // タイトルを中央揃え
      }}
    >
      <Tabs.Screen
        name="home"
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
