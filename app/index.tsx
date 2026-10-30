import { myStyle } from "@/styles/main";
import { useRouter, usePathname } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import * as SQLite from "expo-sqlite";

export default function HomeScreen() {
  const router = useRouter();
  // const pathname = usePathname();
  // setInterval(() => {
  // if (pathname === "/") {
  //   router.navigate("/login");
  // }
  // }, 3000);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={myStyle.splash}>
      <Text style={myStyle.splashText}>TechCrush Mobile</Text>
    </View>
  );
}

