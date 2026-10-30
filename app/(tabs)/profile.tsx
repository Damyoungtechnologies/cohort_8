import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { myStyle } from "@/styles/main";
import { useSQLiteContext } from "expo-sqlite";

import { useLogin } from "@/store/loginStore";
// import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function Register() {
  const [users, setUsers] = useState<User[]>([]);
  const db = useSQLiteContext();

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<User>("SELECT * FROM users");
      setUsers(result);
    }
    setup();
  }, []);

  // const { firstName, lastName, email, password } = useLogin((state) => state);

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
        {users.map((user, index) => (
          <View key={index} style={myStyle.card}>
            <Text style={myStyle.text}>First Name: {user.firstName}</Text>
            <Text style={myStyle.text}>Last Name: {user.lastName}</Text>
            <Text style={myStyle.text}>Email: {user.email}</Text>
            <Text style={myStyle.text}>Password: {user.password}</Text>
          </View>
        ))}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
