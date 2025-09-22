import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";


type Props = React.ComponentProps<typeof TextInput>;
export const Input = (p: Props) => {
const [focused, setFocused] = useState(false);
return (
<TextInput {...p} onFocus={(e)=>{setFocused(true); p.onFocus?.(e);}} onBlur={(e)=>{setFocused(false); p.onBlur?.(e);}} style={[s.input, focused && s.focused, p.style]} />
);
};


const s = StyleSheet.create({
input: { borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, marginBottom: 10 },
focused: { borderColor: "#2563eb" },
});