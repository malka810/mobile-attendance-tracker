
import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AdminHeader from "@/components/ui/AdminHeader";

export default function Settings() {
  const [gpsRadius, setGpsRadius] = useState("100"); 
  const [qrTimeWindow, setQrTimeWindow] = useState("15"); 
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [academicYear, setAcademicYear] = useState("2025/2026");
  const [semester, setSemester] = useState("Semester 1");

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <AdminHeader />
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-white mb-6">Settings</Text>

    
        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-lg font-semibold mb-2">GPS Radius (meters)</Text>
          <TextInput
            value={gpsRadius}
            onChangeText={setGpsRadius}
            keyboardType="numeric"
            placeholder="Enter GPS radius in meters"
            className="border border-gray-300 rounded-md p-2"
          />
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-lg font-semibold mb-2">QR Time Window (minutes)</Text>
          <TextInput
            value={qrTimeWindow}
            onChangeText={setQrTimeWindow}
            keyboardType="numeric"
            placeholder="Enter QR code allowed time"
            className="border border-gray-300 rounded-md p-2"
          />
        </View>

        {/* System Notifications */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-lg font-semibold mb-2">System Notifications</Text>
          <View className="flex-row justify-between items-center mb-2">
            <Text>Push Notifications</Text>
            <Switch value={pushNotifications} onValueChange={setPushNotifications} />
          </View>
          <View className="flex-row justify-between items-center">
            <Text>Email Notifications</Text>
            <Switch value={emailNotifications} onValueChange={setEmailNotifications} />
          </View>
        </View>

        {/* Academic Year & Semester */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-lg font-semibold mb-2">Academic Year</Text>
          <TextInput
            value={academicYear}
            onChangeText={setAcademicYear}
            placeholder="Enter academic year"
            className="border border-gray-300 rounded-md p-2 mb-2"
          />
          <Text className="text-lg font-semibold mb-2">Semester</Text>
          <TextInput
            value={semester}
            onChangeText={setSemester}
            placeholder="Enter semester"
            className="border border-gray-300 rounded-md p-2"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity className="bg-blue-600 px-4 py-3 rounded-xl mt-4">
          <Text className="text-white font-semibold text-center">Save Settings</Text>
        </TouchableOpacity>

        <View className="h-20" />
      </ScrollView>
    </LinearGradient>
  );
}
