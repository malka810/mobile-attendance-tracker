import { Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; 
import "../global.css";
import { router } from "expo-router";

export default function App() {
  return (
    <LinearGradient
      colors={["#6C63FF", "#9A67EA"]} // Purple → Violet gradient
      style={{ flex: 1 }}
    >
      <View className="flex-1 items-center justify-center px-8">

        
        {/* Logo */}
        <Image
          source={require("../assets/images/Attendo.png")}
          className="w-20 h-20 mb-6"
          resizeMode="contain"
        />

        {/* Subtitle with line breaks */}
        <Text className="text-center text-base text-gray-100 font-medium leading-6 px-4 mb-10">
          A simple way to manage class{"\n"}attendance with QR codes
        </Text>
      </View>

      {/* Bottom Button */}
      <View className=" items-center justify-center px-6 pb-10">
        <TouchableOpacity
        onPress={() => router.push("/login")}
         className="w-64 h-12 bg-white py-3  rounded-xl shadow-lg active:opacity-90 border-1 border-purple-700 flex items-center justify-center">
          <Text className="text-purple-700 text-center font-bold text-lg">
            Mark Attendance
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}