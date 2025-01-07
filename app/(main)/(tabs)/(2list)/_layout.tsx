import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable, TextInput } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  const router = useRouter();
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen
        name="(top-tabs)"
        options={{
          title: "Top Tabs",
          headerStyle: {
            backgroundColor: "#006a6c",
          },
          headerShadowVisible: false,
          headerLeft: ({ canGoBack }) =>
            canGoBack ? (
              <Pressable onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            ) : (
              <Pressable onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={24} color="black" />
              </Pressable>
            ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("/search");
              }}
            >
              <Ionicons name="search" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="search/index"
        options={{
          headerTitle: () => (
            <TextInput
              style={{
                backgroundColor: "#f0f0f0",
                width: "80%",
                height: 36,
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 16,
              }}
              placeholder="検索"
              placeholderTextColor="#999"
              autoFocus={true}
            />
          ),
          contentStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          presentation: "transparentModal",
          animation: "fade",
          headerLeft: ({ canGoBack }) =>
            canGoBack ? (
              <Pressable onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            ) : (
              <Pressable onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={24} color="black" />
              </Pressable>
            ),
        }}
      />
    </Stack>
  );
}
