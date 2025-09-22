//Attendance service logic

import { addAttendance, listAttendance } from "@/services/firebase/firestore";
import { verifyGeo } from "@/services/firebase/functions";


export async function markAttendance(input: { uid: string; qr: string; coords?: { latitude: number; longitude: number } | null }) {
await verifyGeo({ qr: input.qr, coords: input.coords || undefined });
return addAttendance({ uid: input.uid, course: input.qr, status: "present" });
}


export async function getHistory(uid: string) {
return listAttendance(uid);
}