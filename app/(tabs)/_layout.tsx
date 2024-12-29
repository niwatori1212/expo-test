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
    <Tabs>
      <Tabs.Screen
        name="(1map)"
        options={{
          title: "地図",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "map-sharp" : "map-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(2list)"
        options={{
          title: "一覧",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list-sharp" : "list-outline"}
              color={color}
              size={24}
            />
          ),
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
