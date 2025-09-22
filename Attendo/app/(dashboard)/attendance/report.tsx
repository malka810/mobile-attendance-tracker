//Reports for lecturers/admins

import { View, Text, StyleSheet } from "react-native";
import { ReportChart } from "@/components/attendance/ReportChart";


export default function Report() {
return (
<View style={s.container}>
<Text style={s.title}>Reports</Text>
<ReportChart data={[
{ label: "Mon", value: 24 },
{ label: "Tue", value: 18 },
{ label: "Wed", value: 30 },
{ label: "Thu", value: 28 },
{ label: "Fri", value: 26 },
]} />
</View>
);
}


const s = StyleSheet.create({
container: { flex: 1, padding: 16 },
title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
});