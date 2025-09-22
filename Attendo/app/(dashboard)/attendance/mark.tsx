//Mark attendance (QR, GPS)

import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { QRScanner } from "@/components/attendance/QRScanner";
import { Button } from "@/components/ui/Button";
import { useAttendance } from "@/hooks/useAttendance";
import { timeNowHuman } from "@/utils/timeFormatter";


export default function MarkAttendance() {
const [hasLocation, setHasLocation] = useState(false);
const [coords, setCoords] = useState<Location.LocationObjectCoords | null>(null);
const { mark } = useAttendance();


useEffect(() => {
(async () => {
let { status } = await Location.requestForegroundPermissionsAsync();
if (status !== "granted") return Alert.alert("Permission needed", "Location is required for geofencing validation.");
const loc = await Location.getCurrentPositionAsync({});
setCoords(loc.coords);
setHasLocation(true);
})();
}, []);


const onQrScanned = async (code: string) => {
await mark({ qr: code, coords });
Alert.alert("Marked", `Attendance marked at ${timeNowHuman()}`);
};


return (
<View style={s.container}>
<Text style={s.title}>Scan class QR</Text>
{hasLocation ? <QRScanner onScanned={onQrScanned} /> : <Text>Requesting location...</Text>}
<View style={{ height: 12 }} />
<Button label="Use manual code" onPress={() => onQrScanned("MANUAL-CODE")}/>
</View>
);
}


const s = StyleSheet.create({
container: { flex: 1, padding: 16 },
title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
});