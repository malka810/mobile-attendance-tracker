import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  onSave?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function ActionButtons({ onSave, onEdit, onDelete }: Props) {
  return (
    <View className="flex-row justify-end gap-2 mt-2">
      <TouchableOpacity
        className="bg-blue-400 px-4 py-2 rounded-xl"
        onPress={onSave}
      >
        <Text className="text-white font-semibold">Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-400 px-4 py-2 rounded-xl"
        onPress={onEdit}
      >
        <Text className="text-white font-semibold">Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-400 px-4 py-2 rounded-xl"
        onPress={onDelete}
      >
        <Text className="text-white font-semibold">Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
