import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "@/components/ui/Input";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = () => {
    router.push("/(auth)/login"); 
  };

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-2xl font-bold text-center mb-1">
          Reset Password 🔒
        </Text>
        <Text className="text-gray-200 text-base text-center mb-6">
          Enter your new password below
        </Text>

        <View className="relative mb-4">
          <Input
            placeholder="New Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            className="pr-10 border border-gray-300 p-2 w-full rounded"
            placeholderTextColor="#fff"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2"
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <View className="relative mb-6">
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            className="pr-10 border border-gray-300 p-2 w-full rounded"
            placeholderTextColor="#fff"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-2"
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={22}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={onSubmit}
          className="w-70 h-12 bg-white py-3 rounded-xl shadow-lg active:opacity-90 mb-4"
        >
          <Text className="text-purple-700 text-center font-bold text-lg">
            Reset Password
          </Text>
        </TouchableOpacity>

        <View className="mt-4 items-center">
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="text-white font-medium mt-2 underline">
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
