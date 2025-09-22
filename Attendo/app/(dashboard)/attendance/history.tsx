//Attendance history

import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAttendance } from "@/hooks/useAttendance";
import { AttendanceList } from "@/components/attendance/AttendanceList";


export default function History() {
const { history } = useAttendance();
return (
<View style={s.container}>
<Text style={s.title}>Attendance History</Text>
<AttendanceList data={history} />
</View>
);
}


const s = StyleSheet.create({
container: { flex: 1, padding: 16 },
title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
});
