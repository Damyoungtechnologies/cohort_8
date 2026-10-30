import { myStyle } from "@/styles/main";
import { TextInput, Text, View } from "react-native";

type SpecialInputProp = {
  placeholder?: string;
  placeholderTextColor?: string;
  label?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};
export const SpecialInput = ({
  placeholder = "Type here...",
  placeholderTextColor = "yellow",
  label,
  secureTextEntry = false,
  value,
  onChangeText
}: SpecialInputProp) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={myStyle.label}>{label}</Text>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        style={myStyle.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
