import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red" }}>
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        NativeWind is working! 🎉
      </Text>
    </View>
  );
}
