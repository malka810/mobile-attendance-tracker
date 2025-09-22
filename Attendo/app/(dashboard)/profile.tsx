import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/hooks/useAuth";

export default function ProfileScreen() {
  const { user, signOut } = useAuth(); // ✅ using signOut

  if (!user) {
    return (
      <View style={s.centered}>
        <Text style={s.noUser}>No user logged in</Text>
      </View>
    );
  }

  return (
    <View style={s.container}>
      <Card title="Profile">
        <View style={s.profileContent}>
          <Image
            source={{
              uri:
                user.photoURL ??
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.displayName || "User"
                )}`,
            }}
            style={s.avatar}
          />

          <Text style={s.name}>{user.displayName ?? "Unnamed User"}</Text>
          <Text style={s.email}>{user.email}</Text>

          <Button label="Logout" onPress={signOut} />
        </View>
      </Card>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb", // gray-50
    padding: 16,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  noUser: {
    fontSize: 18,
    fontWeight: "600",
  },
  profileContent: {
    alignItems: "center",
    padding: 24,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#6b7280", // gray-500
    marginBottom: 24,
  },
});
