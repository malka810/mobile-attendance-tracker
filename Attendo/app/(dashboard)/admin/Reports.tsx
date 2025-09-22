
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AdminHeader from "@/components/ui/AdminHeader";

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState<"Daily" | "Weekly" | "Monthly">("Daily");

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <AdminHeader />
      <ScrollView className="flex-1 p-4">

        <Text className="text-white text-2xl font-bold mb-6">Reports</Text>

        <View className="flex-row justify-between mb-4">
          {["Daily", "Weekly", "Monthly"].map((period) => (
            <TouchableOpacity
              key={period}
              className={`px-4 py-2 rounded-lg ${selectedPeriod === period ? "bg-white" : "bg-purple-200"}`}
              onPress={() => setSelectedPeriod(period as any)}
            >
              <Text className={`font-bold ${selectedPeriod === period ? "text-purple-700" : "text-purple-900"}`}>
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="bg-white p-4 rounded-lg mb-4 shadow">
          <Text className="font-bold text-lg mb-2">Student Attendance Reports</Text>
          <Text className="text-gray-500 mb-2">
            View attendance of all students.
          </Text>
          <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg">
            <Text className="text-white font-bold text-center">View Student Reports</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white p-4 rounded-lg mb-4 shadow">
          <Text className="font-bold text-lg mb-2">Lecturer Session Reports</Text>
          <Text className="text-gray-500 mb-2">
            View session-wise reports of lecturers.
          </Text>
          <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg">
            <Text className="text-white font-bold text-center">View Lecturer Reports</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white p-4 rounded-lg mb-4 shadow">
          <Text className="font-bold text-lg mb-2">Export Reports</Text>
          <Text className="text-gray-500 mb-2">
            Download reports in PDF / Excel format.
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-lg flex-1 mr-2">
              <Text className="text-white font-bold text-center">Export PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg flex-1 ml-2">
              <Text className="text-white font-bold text-center">Export Excel</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}
