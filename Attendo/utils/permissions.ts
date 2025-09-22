
import * as Location from "expo-location";
export async function ensureLocation() {
const { status } = await Location.requestForegroundPermissionsAsync();
return status === "granted";
}