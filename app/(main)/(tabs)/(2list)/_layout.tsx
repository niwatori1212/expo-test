import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(top-tabs)" options={{ title: "Top Tabs" }} />
    </Stack>
  );
}
