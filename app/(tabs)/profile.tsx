import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { myStyle } from "@/styles/main";
import { SpecialInput } from "@/components/ui/special-input";
import { Button } from "@react-navigation/elements";
import { useLogin } from "@/store/loginStore";
// import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Register() {
  const { firstName, lastName, email, password } = useLogin((state) => state);

  // useEffect(() => {
  //   async function setup() {
  //     const result = await db.getAllAsync<Todo>('SELECT * FROM todos');
  //     setTodos(result);
  //   }
  //   setup();
  // }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={myStyle.card}>
          <Text style={myStyle.text}>First Name: {firstName}</Text>
          <Text style={myStyle.text}>Last Name: {lastName}</Text>
          <Text style={myStyle.text}>Email: {email}</Text>
          <Text style={myStyle.text}>Password: {password}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
