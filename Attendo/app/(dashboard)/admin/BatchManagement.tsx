// app/(dashboard)/admin/BatchManagement.tsx
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AdminHeader from "@/components/ui/AdminHeader";

export default function BatchManagement() {
  const [activeTab, setActiveTab] = useState("batch");

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <AdminHeader/>
      <ScrollView contentContainerStyle={{ padding: 16 }}>

        {/* Tabs */}
        <View className="flex-row mb-4 flex-wrap">
          {["batch", "students", "lecturers", "reports"].map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`px-4 py-2 rounded-lg mb-2 mr-2 ${
                activeTab === tab ? "bg-white" : "bg-purple-300"
              }`}
              onPress={() => setActiveTab(tab)}
            >
              <Text className={activeTab === tab ? "text-purple-700 font-bold" : "text-white"}>
                {tab === "batch" && "Batches"}
                {tab === "students" && "Assign Students"}
                {tab === "lecturers" && "Assign Lecturers"}
                {tab === "reports" && "Reports"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        {activeTab === "batch" && (
          <View className="bg-white p-4 rounded-lg mb-4">
            <Text className="text-purple-700 font-bold mb-2">Manage Batches</Text>
            <Text className="text-gray-500 mb-4">
              Create, edit, or delete student batches.
            </Text>
            <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-bold">+ Add Batch</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === "students" && (
          <View className="bg-white p-4 rounded-lg mb-4">
            <Text className="text-purple-700 font-bold mb-2">Assign Students to Batch</Text>
            <Text className="text-gray-500 mb-4">
              Select a batch and assign students.
            </Text>

            <View className="border border-gray-300 p-4 rounded-md mb-4">
              <Text className="font-bold mb-2">Batch A</Text>
              <Picker className="border border-gray-300 rounded-md p-2 mb-2">
                <Picker.Item label="Select Student" value="" />
                <Picker.Item label="Malka Samarakoon" value="malka" />
                <Picker.Item label="John Doe" value="john" />
              </Picker>
              <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg mt-2">
                <Text className="text-white font-bold text-center">Assign Student</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === "lecturers" && (
          <View className="bg-white p-4 rounded-lg mb-4">
            <Text className="text-purple-700 font-bold mb-2">Assign Lecturers to Batch</Text>
            <Text className="text-gray-500 mb-4">
              Select a batch and assign lecturers.
            </Text>

            <View className="border border-gray-300 p-4 rounded-md mb-4">
              <Text className="font-bold mb-2">Batch A</Text>
              <Picker className="border border-gray-300 rounded-md p-2 mb-2">
                <Picker.Item label="Select Lecturer" value="" />
                <Picker.Item label="Dr. Smith" value="smith" />
                <Picker.Item label="Ms. Jane" value="jane" />
              </Picker>
              <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg mt-2">
                <Text className="text-white font-bold text-center">Assign Lecturer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === "reports" && (
          <View className="bg-white p-4 rounded-lg mb-4">
            <Text className="text-purple-700 font-bold mb-2">Attendance Reports</Text>
            <Text className="text-gray-500 mb-4">
              Track attendance by batch or student.
            </Text>
            <View className="border border-gray-300 p-2 rounded-md">
              <Text>Batch A - Malka Samarakoon - Dr. Smith - 95%</Text>
              <Text>Batch B - John Doe - Ms. Jane - 88%</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}
