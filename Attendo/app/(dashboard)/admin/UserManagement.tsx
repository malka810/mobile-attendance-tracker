import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import AdminHeader from "@/components/ui/AdminHeader";

export default function UserManagement() {
  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
   
      <AdminHeader />

      
      <ScrollView className="flex-1 p-4">
     
        <TouchableOpacity className="bg-indigo-600 p-4 rounded-xl mb-6 shadow">
          <Text className="text-white text-center font-semibold">
            📂 Bulk Import Users (CSV / Excel)
          </Text>
        </TouchableOpacity>

     
        <View>
      
          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/StudentManagement")}
            className="bg-white rounded-2xl p-6 mb-4 shadow"
          >
            <Text className="text-lg font-bold mb-2">🎓 Student Management </Text>
            <Text className="text-gray-600">Manage batches, enrollment & attendance</Text>
          </TouchableOpacity>

          
          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/LectureManagement")}
            className="bg-white rounded-2xl p-6 mb-4 shadow"
          >
            <Text className="text-lg font-bold mb-2">👨‍🏫 Lecturer Management</Text>
            <Text className="text-gray-600">Assign subjects, batches & sessions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/ParentManagement")}
            className="bg-white rounded-2xl p-6 mb-4 shadow"
          >
            <Text className="text-lg font-bold mb-2">👨‍👩‍👦 Parent Management</Text>
            <Text className="text-gray-600">Link parent accounts to students</Text>
          </TouchableOpacity>

        
          <TouchableOpacity
            onPress={() => router.push("/(dashboard)/admin/AdminManagement")}
            className="bg-white rounded-2xl p-6 mb-4 shadow"
          >
            <Text className="text-lg font-bold mb-2">🛡️ Admin Management</Text>
            <Text className="text-gray-600">Manage admin accounts and roles</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
