import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

//   const onSubmit = async () => {
//     setError(null);
//     setSuccess(null);

//     if (!email) {
//       setError("Please enter your email");
//       return;
//     }

//     setBusy(true);
//     try {
//       await resetPassword(email);
//       setSuccess("Password reset link sent to your email");

//       // Navigate to Reset Password page after success
//       router.push({
//         pathname: "/(auth)/reset-password",
//         params: { email } // optionally pass email
//       });
//     } catch (e: any) {
//       setError(e?.message ?? "Failed to send reset link");
//     } finally {
//       setBusy(false);
//     }
//   };

  const onSubmit = () => {
  // just navigate to reset-password page without validation
  router.push("/(auth)/reset-password");
};


  return (
    <LinearGradient colors={["#6C63FF", "#9A67EA"]} style={{ flex: 1 }}>
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-2xl font-bold text-center mb-1">
          Forgot Password?
        </Text>
        <Text className="text-gray-200 text-base text-center mb-6">
          Enter your email to reset your password
        </Text>

        {error && <Text className="text-red-500 text-center mb-3">{error}</Text>}
        {success && <Text className="text-green-500 text-center mb-3">{success}</Text>}

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="mb-6 border border-gray-300 p-2 w-full rounded"
          placeholderTextColor="#fff"
        />

        <TouchableOpacity
          onPress={onSubmit}
          disabled={busy}
          className="w-70 h-12 bg-white py-3 rounded-xl shadow-lg active:opacity-90 mb-4"
        >
          <Text className="text-purple-700 text-center font-bold text-lg">
            {busy ? "Sending..." : "Reset Password"}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
