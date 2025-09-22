import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Input } from "@/components/ui/Input";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { loginUser } from "@/services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
const onSubmit = async () => {
  if (!email || !password) {
    Alert.alert("Error", "Please enter email and password");
    return;
  }

  try {
    setLoading(true);
    const userData = await loginUser(email, password);

    if (!userData.role) {
      Alert.alert("Login failed", "Unknown role");
      return;
    }

    setTimeout(() => {
      switch (userData.role) {
        case "admin":
          router.push("/admin");
          break;
        case "student":
          router.push("/student");
          break;
        case "lecturer":
          router.push("/lecturer");
          break;
        case "parent":
          router.push("/parent");
          break;
      }
    }, 0);

  } catch (err: any) {
    Alert.alert("Login failed", err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-2xl font-bold text-center mb-1">
          Welcome back 👋
        </Text>
        <Text className="text-gray-200 text-base text-center mb-6">
          Sign in to continue
        </Text>

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="mb-4 border border-gray-300 p-2 w-full rounded"
          placeholderTextColor="#fff"
        />

        <View className="relative mb-4">
          <Input
            placeholder="Password"
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

        <TouchableOpacity
          onPress={onSubmit}
          disabled={loading}
          className="w-70 h-12 bg-white py-3 rounded-xl shadow-lg active:opacity-90 mb-4"
        >
          {loading ? (
            <ActivityIndicator size="small" color="#6C63FF" />
          ) : (
            <Text className="text-purple-700 text-center font-bold text-lg">
              Sign In
            </Text>
          )}
        </TouchableOpacity>
        
        <View className="mt-6 items-center">
          <Link href="/(auth)/register">
            <Text className="text-white font-medium mt-2">
              Don’t have an account? <Text className="text-black underline">Sign up</Text>
            </Text>
          </Link>
          <Link href="/(auth)/forgot-password">
            <Text className="text-white font-medium mt-2">Forgot password?</Text>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}
