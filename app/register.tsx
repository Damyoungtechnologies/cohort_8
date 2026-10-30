import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable } from "react-native";
import { myStyle } from "@/styles/main";
import { SpecialInput } from "@/components/ui/special-input";
// removed @react-navigation/elements import for SDK 56+ compatibility
export default function Register() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={myStyle.card}>
          <SpecialInput label="Email" placeholder="Enter email" />
          <SpecialInput
            label="Password"
            placeholder="Enter password"
            placeholderTextColor="red"
            secureTextEntry={true}
          />
        </View>
        <Text style={myStyle.text}>This is register</Text>
        <Text style={myStyle.text}>This is register</Text>
        <Text style={myStyle.text}>This is register</Text>
        <Text style={myStyle.text}>This is register</Text>
        <Text style={myStyle.text}>This is register</Text>

        <Pressable style={myStyle.button}>
          <Text>click me</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
