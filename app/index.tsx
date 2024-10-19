import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>OTP ILLAOI TOP</Text>
      <Link href="/signIn">SignIn</Link>
      <Link href="/signUp">SignUp</Link>
    </View>
  );
}
