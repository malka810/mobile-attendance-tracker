// app/(dashboard)/admin/StudentManagement.tsx
import { View, Text, TouchableOpacity, ScrollView, TextInput, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AdminHeader from "@/components/ui/AdminHeader";
import { useState } from "react";
import ActionButtons from "@/components/ui/ActionButtons";

type Student = {
  id: number;
  name: string;
  email: string;
  batch: string;
  status: string;
  userCode: string;
  password: string;
};

export default function StudentManagement() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    name: "",
    email: "",
    batch: "",
    status: "",
    userCode: "",
    password: "",
  });
  const [searchText, setSearchText] = useState("");

  const handleChangeNew = (field: keyof Student, value: string) => {
    setNewStudent((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddStudent = () => {
    const newId = students.length + 1;
    setStudents([...students, { ...newStudent, id: newId }]);
    setNewStudent({ id: 0, name: "", email: "", batch: "", status: "", userCode: "", password: "" });
    setShowAddCard(false);
  };

  const handleEditStudent = (id: number, field: keyof Student, value: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleDeleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
    <Text className="text-black font-semibold text-center">➕ Add Student</Text>
  </TouchableOpacity>

  <TouchableOpacity
    className="bg-orange-300 flex-1 p-3 rounded-xl shadow ml-2"
    onPress={() => setShowAddCard(false)} // Hide card, show list
  >
    <Text className="text-black font-semibold text-center">📋 View List</Text>
  </TouchableOpacity>
</View>


     {/* Add Student Card */}
{showAddCard && (
  <View className="bg-white rounded-2xl p-4 mb-4 shadow">

    <Text className="text-lg font-bold mb-2">New Student</Text>
    <TextInput
      placeholder="Name"
      value={newStudent.name}
      onChangeText={(text) => handleChangeNew("name", text)}
      className="border border-gray-300 rounded-md p-2 mb-2"
    />
    <TextInput
      placeholder="Email"
      value={newStudent.email}
      onChangeText={(text) => handleChangeNew("email", text)}
      className="border border-gray-300 rounded-md p-2 mb-2"
    />
    <TextInput
      placeholder="Batch"
      value={newStudent.batch}
      onChangeText={(text) => handleChangeNew("batch", text)}
      className="border border-gray-300 rounded-md p-2 mb-2"
    />
    <TextInput
      placeholder="Status"
      value={newStudent.status}
      onChangeText={(text) => handleChangeNew("status", text)}
      className="border border-gray-300 rounded-md p-2 mb-2"
    />
    <TextInput
      placeholder="User Code"
      value={newStudent.userCode}
      onChangeText={(text) => handleChangeNew("userCode", text)}
      className="border border-gray-300 rounded-md p-2 mb-2"
    />
    <TextInput
      placeholder="Password"
      value={newStudent.password}
      onChangeText={(text) => handleChangeNew("password", text)}
      secureTextEntry
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
