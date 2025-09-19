import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Redirect } from "expo-router";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";

export default function Register() {
  const { signUp, user } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userCode, setUserCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  
  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <View className="flex-1 justify-center px-6">
        {/* Title */}
        <Text className="text-white text-2xl font-bold text-center mb-1">
          Create Account ✨
        </Text>
        <Text className="text-gray-200 text-base text-center mb-6">
          Sign up to continue
        </Text>

        {/* Error */}
        {error && <Text className="text-red-500 text-center mb-3">{error}</Text>}

        {/* Full Name */}
        <Input
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          className="mb-4 border border-gray-300 p-2 w-full rounded"
          placeholderTextColor="#fff"
        />

        {/* Email */}
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="mb-4 border border-gray-300 p-2 w-full rounded"
          placeholderTextColor="#fff"
        />

        {/* Password */}
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

        {/* Confirm Password */}
        <View className="relative mb-4">
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

        {/* User Code */}
        <Input
          placeholder="User Code"
          value={userCode}
          onChangeText={setUserCode}
          className="mb-6 border border-gray-300 p-2 w-full rounded"
          placeholderTextColor="#fff"
        />

        {/* Register Button */}
        <TouchableOpacity
        //   onPress={onSubmit}
          disabled={busy}
          className="w-70 h-12 bg-white py-3 rounded-xl shadow-lg active:opacity-90 mb-4"
        >
          <Text className="text-purple-700 text-center font-bold text-lg">
            {busy ? "Signing up..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

        {/* Links */}
        <View className="mt-4 items-center">
          <Link href="/(auth)/login">
            <Text className="text-white font-medium mt-2">
              Already have an account? <Text className="text-black underline">Sign in</Text>
            </Text>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}
