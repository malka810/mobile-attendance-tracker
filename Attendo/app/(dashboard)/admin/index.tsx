import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import AdminHeader from "@/components/ui/AdminHeader";

export default function AdminDashboard() {
  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
    
      <AdminHeader />

      <ScrollView className="flex-1 px-6">
       
        
<View className="flex-row flex-wrap justify-between mb-6">
  
  <LinearGradient
    colors={["#D8B4FE", "#EDE9FE"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    className="rounded-3xl p-6 w-[48%] mb-4 shadow-md flex-row items-center gap-4 border border-white/30 shadow-purple-300"
  >
    <Ionicons name="school" size={28} color="#7C3AED" />
    <View>
      <Text className="text-purple-700 text-xl font-bold text-center">120</Text>
      <Text className="text-purple-500 mt-1 font-semibold">Students</Text>
    </View>
  </LinearGradient>

  <LinearGradient
    colors={["#BFDBFE", "#E0F2FE"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    className="rounded-3xl p-6 w-[48%] mb-4 shadow-md flex-row items-center gap-4 border border-white/30 shadow-blue-300"
  >
    <Ionicons name="people" size={28} color="#2563EB" />
    <View>
      <Text className="text-blue-700 text-xl font-bold text-center">10</Text>
      <Text className="text-blue-500 mt-1 font-semibold">Lecturers</Text>
    </View>
  </LinearGradient>

  <LinearGradient
    colors={["#A5F3FC", "#E0F2FE"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    className="rounded-3xl p-6 w-[48%] mb-4 shadow-md flex-row items-center gap-2 border border-white/30 shadow-gray-300"
  >
    <MaterialIcons name="event" size={28} color="#0EA5E9" />
    <View>
      <Text className="text-sky-700 text-xl font-bold text-center">5</Text>
      <Text className="text-sky-500 mt-1 font-semibold">Sessions Today</Text>
    </View>
  </LinearGradient>

  <LinearGradient
    colors={["#FBCFE8", "#FEE2E2"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    className="rounded-3xl p-6 w-[48%] mb-4 shadow-md flex-row items-center gap-4 border border-white/30 shadow-pink-300"
  >
    <FontAwesome5 name="layer-group" size={24} color="#DB2777" />
    <View>
      <Text className="text-pink-700 text-xl font-bold text-center">3</Text>
      <Text className="text-pink-500 mt-1 font-semibold">Active Batches</Text>
    </View>
  </LinearGradient>
</View>
        <View className="bg-white rounded-2xl p-6 shadow-lg mb-20">
          <Text className="text-purple-700 font-bold text-lg mb-3">🕑 Recent Activity</Text>
          <View className="gap-3">
            <View className="flex-row items-center gap-3">
              <Image source={{ uri: "https://api.dicebear.com/9.x/personas/svg?seed=Ryker" }} className="w-8 h-8 rounded-full" />
              <Text className="text-gray-600">Student “Nimal” marked attendance</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <Image source={{ uri: "https://api.dicebear.com/9.x/miniavs/svg?seed=Andrea" }} className="w-8 h-8 rounded-full" />
              <Text className="text-gray-600">New Lecturer added by Admin</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=t0l9DLRHG3TP&format=png&color=000000" }} className="w-8 h-8 rounded-full" />
              <Text className="text-gray-600">Batch B1 Report Generated</Text>
            </View>
          </View>
        </View>

        <View className="gap-4 mb-6">
          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/UserManagement")}
            className="bg-white rounded-2xl p-6 shadow-lg active:opacity-90 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="person-circle" size={30} color="#6C63FF" />
              <View>
                <Text className="text-purple-700 font-bold text-lg">User Management</Text>
                <Text className="text-gray-500">Manage Students & Lecturers</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/BatchManagement")}
            className="bg-white rounded-2xl p-6 shadow-lg active:opacity-90 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="albums" size={30} color="#6C63FF" />
              <View>
                <Text className="text-purple-700 font-bold text-lg">Batch / Module Management</Text>
                <Text className="text-gray-500">Manage batches & modules</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/Reports")}
            className="bg-white rounded-2xl p-6 shadow-lg active:opacity-90 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="stats-chart" size={30} color="#6C63FF" />
              <View>
                <Text className="text-purple-700 font-bold text-lg">Reports</Text>
                <Text className="text-gray-500">View attendance reports</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/Notifications")}
            className="bg-white rounded-2xl p-6 shadow-lg active:opacity-90 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name="notifications" size={30} color="#6C63FF" />
              <View>
                <Text className="text-purple-700 font-bold text-lg">Notifications</Text>
                <Text className="text-gray-500">Latest system alerts</Text>
              </View>
            </View>
            <View className="bg-red-500 rounded-full px-2 py-1">
              <Text className="text-white text-xs font-bold">3</Text>
            </View>
          </TouchableOpacity>         
        </View>       
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-8 right-8 bg-purple-600 rounded-full p-4 shadow-lg"
        onPress={() => router.push("/(dashboard)/admin/UserManagement")}
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
