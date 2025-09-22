import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";


type Props = { label: string; onPress?: () => void; disabled?: boolean; variant?: "primary" | "secondary"; style?: ViewStyle };
export const Button = ({ label, onPress, disabled, variant = "primary", style }: Props) => {
return (
<Pressable onPress={onPress} disabled={disabled} style={[s.base, variant === "secondary" ? s.secondary : s.primary, disabled && { opacity: 0.5 }, style]}>
<Text style={s.text}>{label}</Text>
</Pressable>
);
};


const s = StyleSheet.create({
base: { paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, alignItems: "center" },
primary: { backgroundColor: "#2563eb" },
secondary: { backgroundColor: "#e5e7eb" },
text: { color: "white", fontWeight: "600" },
});