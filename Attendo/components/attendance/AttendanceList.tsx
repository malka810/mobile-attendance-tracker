import { FlatList, View, Text } from "react-native";
import { timeToHuman } from "@/utils/timeFormatter";


export type AttendanceItem = { id: string; course: string; at: number; status: "present" | "late" | "absent" };


export const AttendanceList = ({ data }: { data: AttendanceItem[] }) => (
<FlatList
data={data}
keyExtractor={(i) => i.id}
renderItem={({ item }) => (
<View style={{ paddingVertical: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
<Text style={{ fontWeight: "600" }}>{item.course}</Text>
<Text>{timeToHuman(item.at)} • {item.status.toUpperCase()}</Text>
</View>
)}
ListEmptyComponent={<Text>No records yet.</Text>}
/>
);