// app/(dashboard)/admin/ParentManagement.tsx
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AdminHeader from "@/components/ui/AdminHeader";
import { useState } from "react";
import ActionButtons from "@/components/ui/ActionButtons";

type Parent = {
  id: number;
  name: string;
  email: string;
  linkedStudents: string;
  userCode: string;
  password: string;
};

export default function ParentManagement() {
  const [parents, setParents] = useState<Parent[]>([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newParent, setNewParent] = useState<Parent>({
    id: 0,
    name: "",
    email: "",
    linkedStudents: "",
    userCode: "",
    password: "",
  });

  const handleChangeNew = (field: keyof Parent, value: string) => {
    setNewParent((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>

      <AdminHeader />
      <ScrollView className="flex-1 p-4">
        <View className="flex-row mb-4">
          <TouchableOpacity
            className="bg-yellow-100 flex-1 p-3 rounded-xl shadow mr-2"
            onPress={() => setShowAddCard(!showAddCard)}
          >
            <Text className="text-black font-semibold text-center">➕ Add Parent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-orange-300 flex-1 p-3 rounded-xl shadow ml-2"
            onPress={() => setShowAddCard(false)}
          >
            <Text className="text-black font-semibold text-center">📋 View List</Text>
          </TouchableOpacity>
        </View>

        {showAddCard && (
          <View className="bg-white rounded-2xl p-4 mb-4 shadow">
            <Text className="text-lg font-bold mb-2">New Parent</Text>
            <TextInput placeholder="Name" value={newParent.name}
              onChangeText={(t) => handleChangeNew("name", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Email" value={newParent.email}
              onChangeText={(t) => handleChangeNew("email", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Linked Students" value={newParent.linkedStudents}
              onChangeText={(t) => handleChangeNew("linkedStudents", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="User Code" value={newParent.userCode}
              onChangeText={(t) => handleChangeNew("userCode", t)}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <TextInput placeholder="Password" value={newParent.password}
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
