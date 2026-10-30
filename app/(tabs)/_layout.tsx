import { Tabs } from "expo-router";
import "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color={"white"} />
          ),
        }}
      />
    </Tabs>
  );
}
