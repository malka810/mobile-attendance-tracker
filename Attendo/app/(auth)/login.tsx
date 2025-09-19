import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Redirect } from "expo-router";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons"; // for eye toggle
import { AntDesign } from "@expo/vector-icons"; // Google
import { FontAwesome } from "@expo/vector-icons"; // Facebook
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Apple

export default function Login() {
  const { signIn, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (user) return <Redirect href="/(dashboard)" />;

  const onSubmit = async () => {
    setBusy(true);
    setError(null);
    try {
      await signIn(email, password);
    } catch (e: any) {
      setError(e?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <View className="flex-1 justify-center px-6">
        {/* Title */}
        <Text className="text-white text-2xl font-bold text-center mb-1">
          Welcome back 👋
        </Text>
        <Text className="text-gray-200 text-base text-center mb-6">
          Sign in to continue
        </Text>

        {/* Error */}
        {error && (
          <Text className="text-red-500 text-center mb-3">{error}</Text>
        )}

        {/* Email Input */}
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="mb-4 border border-gray-300 p-2 w-full rounded"
          placeholderTextColor={"#fff"}
        />

        {/* Password Input with Eye Icon inside */}
        <View className="relative mb-4">
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            className="pr-10 border border-gray-300 p-2 w-full rounded"
            placeholderTextColor={"#fff"}
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

        {/* Main Sign In Button */}
        <TouchableOpacity
          onPress={onSubmit}
          disabled={busy}
          className="w-70 h-12 bg-white py-3 rounded-xl shadow-lg active:opacity-90"
        >
          <Text className="text-purple-700 text-center font-bold text-lg">
            {busy ? "Signing in..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="text-white mx-3">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <View className="flex-row justify-center space-x-4">
          {/* Google */}
          <TouchableOpacity className="bg-white w-12 h-12 rounded-full items-center justify-center shadow">
            <AntDesign name="google" size={24} color="#DB4437" />
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity className="bg-white w-12 h-12 rounded-full items-center justify-center shadow">
            <FontAwesome name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity className="bg-white w-12 h-12 rounded-full items-center justify-center shadow">
            <MaterialCommunityIcons name="apple" size={28} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Links */}
        <View className="mt-6 items-center">
          <Link href="/(auth)/register">
            <Text className="text-white font-medium mt-2">
              Don’t have an account? <Text className="text-black underline font-large mt-2">Sign up</Text>
            </Text>
          </Link>
          <Link href="/(auth)/forgot-password">
            <Text className="text-white font-medium mt-2">
              Forgot password?
            </Text>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}
