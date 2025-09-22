
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AdminHeader from "@/components/ui/AdminHeader";

export default function Notifications() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <AdminHeader />
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-white mb-6">Notifications Settings</Text>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold">Push Notifications</Text>
            <Switch value={pushNotifications} onValueChange={setPushNotifications} />
          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold">Email Notifications</Text>
            <Switch value={emailNotifications} onValueChange={setEmailNotifications} />
          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold">SMS Notifications</Text>
            <Switch value={smsNotifications} onValueChange={setSmsNotifications} />
          </View>
        </View>

        <TouchableOpacity className="bg-blue-600 px-4 py-3 rounded-xl mt-4">
          <Text className="text-white font-semibold text-center">Save Notifications</Text>
        </TouchableOpacity>

        <View className="h-20" />
      </ScrollView>
    </LinearGradient>
  );
}
