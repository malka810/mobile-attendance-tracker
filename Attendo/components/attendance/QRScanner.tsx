// import { BarCodeScanner } from "expo-barcode-scanner";
// import { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";


// type Props = { onScanned: (code: string) => void };
// export const QRScanner = ({ onScanned }: Props) => {
// const [hasPermission, setHasPermission] = useState<boolean | null>(null);
// const [scanned, setScanned] = useState(false);


// useEffect(() => {
// (async () => {
// const { status } = await BarCodeScanner.requestPermissionsAsync();
// setHasPermission(status === "granted");
// })();
// }, []);


// if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
// if (hasPermission === false) return <Text>No access to camera</Text>;


// return (
// <View style={s.box}>
// <BarCodeScanner
// onBarCodeScanned={scanned ? undefined : ({ data }) => { setScanned(true); onScanned(String(data)); setTimeout(()=>setScanned(false), 1200); }}
// style={{ width: "100%", height: 260 }}
// />
// <Text style={{ textAlign: "center", marginTop: 8 }}>Align the QR within the frame</Text>
// </View>
// );
// };


// const s = StyleSheet.create({ box: { borderRadius: 14, overflow: "hidden", backgroundColor: "#f3f4f6" } });
