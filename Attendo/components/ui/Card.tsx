import { View, Text, StyleSheet, ViewProps } from "react-native";

type Props = ViewProps & {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode; // ✅ allow nested content
};

export const Card = ({ title, subtitle, children, style, ...rest }: Props) => (
  <View style={[s.card, style]} {...rest}>
    {title && <Text style={s.title}>{title}</Text>}
    {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    {children}
  </View>
);

const s = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: 8,
  },
});
