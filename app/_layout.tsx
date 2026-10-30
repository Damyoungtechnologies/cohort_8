import { SQLiteProvider } from "expo-sqlite";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import createDbIfNeeded from "@/store/db";
export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="mydb.db" onInit={createDbIfNeeded}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </SQLiteProvider>
  );
}
