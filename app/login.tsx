import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { myStyle } from "@/styles/main";
import { SpecialInput } from "@/components/ui/special-input";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
// import { useState } from "react";
import { useLogin } from "@/store/loginStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import { useSQLiteContext } from "expo-sqlite";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");

  // For zustand storage
  const {
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePassword,
    firstName,
    lastName,
    email,
    password,
  } = useLogin((state) => state);

  const db = useSQLiteContext();

  // For asynchronous storage
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("First Name", firstName);
      await AsyncStorage.setItem("Last Name", lastName);
      await AsyncStorage.setItem("Password", password);
      await AsyncStorage.setItem("Email", email);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const loadData = async () => {
      const storedFirstName = await AsyncStorage.getItem("First Name");
      const storedLastName = await AsyncStorage.getItem("Last Name");
      const storedPassword = await AsyncStorage.getItem("Password");
      const storedEmail = await AsyncStorage.getItem("Email");
      updateFirstName(storedFirstName || "");
      updateLastName(storedLastName || "");
      updatePassword(storedPassword || "");
      updateEmail(storedEmail || "");
    };
    loadData();
  }, []);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await storeData();

      await db.runAsync(
        "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
        firstName,
        lastName,
        email,
        password,
      );

      router.replace("/(tabs)/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={myStyle.container}>
        <View style={myStyle.card}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <SpecialInput
              label="First Name"
              value={firstName}
              // onChangeText={(text) => setFirstName(text)}
              onChangeText={(text) => updateFirstName(text)}
              placeholder="Enter first name"
            />
            <SpecialInput
              label="Last Name"
              value={lastName}
              // onChangeText={(text) => setLastName(text)}
              onChangeText={(text) => updateLastName(text)}
              placeholder="Enter last name"
            />
          </View>
          <SpecialInput
            label="Email"
            value={email}
            // onChangeText={(text) => setEmail(text)}
            onChangeText={(text) => updateEmail(text)}
            placeholder="Enter email"
          />
          <SpecialInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            // onChangeText={(text) => setPassword(text)}
            onChangeText={(text) => updatePassword(text)}
          />
          <Button
            onPressIn={handleLogin}
            color="#d604df"
            style={myStyle.button}
          >
            Login
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
