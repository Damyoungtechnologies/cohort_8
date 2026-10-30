import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { myStyle } from "@/styles/main";
import { SpecialInput } from "@/components/ui/special-input";
import { Button } from "@react-navigation/elements";
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

        <Button style={myStyle.button}>click me</Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
