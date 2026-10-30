import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { myStyle } from "@/styles/main";
import { SpecialInput } from "@/components/ui/special-input";
import { Button } from "@react-navigation/elements";
export default function Register() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ backgroundColor: "#808080", width: "100%", height: "100%" }}
      >
        <View style={myStyle.card}>
          <SpecialInput label="Email" placeholder="Enter email" />
          <SpecialInput
            label="Password"
            placeholder="Enter password"
            placeholderTextColor="red"
            secureTextEntry={true}
          />
        </View>
        <Text style={myStyle.text}>This is Settings</Text>
        <Text style={myStyle.text}>This is Settings</Text>
        <Text style={myStyle.text}>This is Settings</Text>
        <Text style={myStyle.text}>This is Settings</Text>
        <Text style={myStyle.text}>This is Settings</Text>

        <Button style={myStyle.button}>click me</Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
