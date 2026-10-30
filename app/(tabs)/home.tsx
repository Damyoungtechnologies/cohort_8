import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Pressable } from "react-native";
import { myStyle } from "@/styles/main";
import { SpecialInput } from "@/components/ui/special-input";
// removed @react-navigation/elements import for SDK 56+ compatibility
export default function Home() {
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
        <Pressable style={myStyle.button}>
          <Text>click me</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
