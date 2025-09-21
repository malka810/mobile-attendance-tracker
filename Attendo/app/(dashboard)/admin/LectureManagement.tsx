// app/(dashboard)/admin/LecturerManagement.tsx
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AdminHeader from "@/components/ui/AdminHeader";
import { useState } from "react";
import ActionButtons from "@/components/ui/ActionButtons";

type Lecturer = {
  id: number;
  name: string;
  email: string;
  subjects: string;
  batches: string;
  userCode: string;
  password: string;
};

export default function LecturerManagement() {
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newLecturer, setNewLecturer] = useState<Lecturer>({
    id: 0,
    name: "",
    email: "",
    subjects: "",
    batches: "",
    userCode: "",
    password: "",
  });

  const handleChangeNew = (field: keyof Lecturer, value: string) => {
    setNewLecturer((prev) => ({ ...prev, [field]: value }));
  };

  return (
     <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <AdminHeader />
      <ScrollView className="flex-1 p-4">
        {/* Add/View buttons */}
        <View className="flex-row mb-4">
          <TouchableOpacity
            className="bg-yellow-100 flex-1 p-3 rounded-xl shadow mr-2"
            onPress={() => setShowAddCard(!showAddCard)}
          >
            <Text className="text-black font-semibold text-center">➕ Add Lecturer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-orange-300 flex-1 p-3 rounded-xl shadow ml-2"
            onPress={() => setShowAddCard(false)}
          >
            <Text className="text-black font-semibold text-center">📋 View List</Text>
          </TouchableOpacity>
        </View>

        {/* Add Lecturer Card */}
        {showAddCard && (
          <View className="bg-white rounded-2xl p-4 mb-4 shadow">
            <Text className="text-lg font-bold mb-2">New Lecturer</Text>
            <TextInput placeholder="Name" value={newLecturer.name}
              onChangeText={(t) => handleChangeNew("name", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Email" value={newLecturer.email}
              onChangeText={(t) => handleChangeNew("email", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Subjects" value={newLecturer.subjects}
              onChangeText={(t) => handleChangeNew("subjects", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Batches" value={newLecturer.batches}
              onChangeText={(t) => handleChangeNew("batches", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="User Code" value={newLecturer.userCode}
              onChangeText={(t) => handleChangeNew("userCode", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Password" value={newLecturer.password}
              onChangeText={(t) => handleChangeNew("password", t)} secureTextEntry
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
           <ActionButtons
                onSave={() => alert("Parent Saved")}
                onEdit={() => alert("Parent Edited")}
                onDelete={() => setShowAddCard(false)}
           />
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}
