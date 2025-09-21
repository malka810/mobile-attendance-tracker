// components/AdminHeader.tsx
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AdminHeader() {
  return (
    <View>
      {/* ===== Header with Profile ===== */}
      <View className="px-6 pt-12 pb-6 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image
            source={{ uri: "https://ui-avatars.com/api/?name=Malka+Samarakoon&background=6C63FF&color=fff" }}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <View>
            <Text className="text-white text-lg font-bold">Hi, Admin 👋</Text>
            <Text className="text-gray-200 text-sm">System Administrator</Text>
          </View>
        </View>
        {/* Settings + Logout */}
        <View className="flex-row gap-4">
          <TouchableOpacity onPress={() => router.push("/(dashboard)/admin/Settings")}>
            <Ionicons name="settings" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Ionicons name="log-out" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== Search Bar ===== */}
      <View className="px-6 mb-4">
        <View className="bg-white rounded-full flex-row items-center px-4 py-2 shadow-md">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search anything…"
            placeholderTextColor="#999"
            className="ml-2 flex-1 text-gray-700"
          />
        </View>
      </View>
    </View>
  );
}
