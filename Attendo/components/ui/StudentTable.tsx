import { View, Text, ScrollView } from "react-native";

type Student = {
  id: number;
  name: string;
  email: string;
  batch: string;
  status: string;
  userCode: string;
  password: string;
};

export default function AdminTable({ students }: { students: Student[] }) {
  return (
    <ScrollView horizontal className="bg-white rounded-2xl p-4 shadow">
      <View>
        {/* Header Row */}
        <View className="flex-row border-b border-gray-300 pb-2 mb-2">
          <Text className="w-24 font-bold">Name</Text>
          <Text className="w-40 font-bold">Email</Text>
          <Text className="w-20 font-bold">Batch</Text>
          <Text className="w-20 font-bold">Status</Text>
        </View>

        {/* Data Rows */}
        {students.length === 0 ? (
          <Text className="text-gray-500">No students available.</Text>
        ) : (
          students.map((s) => (
            <View
              key={s.id}
              className="flex-row border-b border-gray-200 py-2"
            >
              <Text className="w-24">{s.name}</Text>
              <Text className="w-40">{s.email}</Text>
              <Text className="w-20">{s.batch}</Text>
              <Text className="w-20">{s.status}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
