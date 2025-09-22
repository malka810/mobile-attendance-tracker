//dashboard home page
import { Link, Redirect } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";


export default function Dashboard() {
const { user, signOut } = useAuth();


if (!user) return <Redirect href="/(auth)/login" />;


return (
<ScrollView contentContainerStyle={s.container}>
<Text style={s.title}>Hi {user.displayName || "there"} 👋</Text>
<Text style={s.subtitle}>What would you like to do today?</Text>


<View style={s.grid}>
<Link href="/(dashboard)/attendance/mark" asChild>
<Card title="Mark Attendance" subtitle="QR & GPS" />
</Link>
<Link href="/(dashboard)/attendance/history" asChild>
<Card title="History" subtitle="Past attendance" />
</Link>
<Link href="/(dashboard)/attendance/report" asChild>
<Card title="Reports" subtitle="For lecturers/admins" />
</Link>
</View>


<View style={{ height: 16 }} />
<Button label="Sign out" variant="secondary" onPress={signOut} />
</ScrollView>
);
}


const s = StyleSheet.create({
container: { padding: 20 },
title: { fontSize: 22, fontWeight: "700" },
subtitle: { color: "#6b7280", marginBottom: 12 },
grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
});