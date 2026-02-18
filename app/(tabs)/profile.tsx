import { View, Text, StyleSheet } from "react-native";

interface ProfileProps {
  name: string;
  age: number;
}

export default function Profile({ name, age }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Halo nama ku, {name} dan umur ku, {age} tahun.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});
