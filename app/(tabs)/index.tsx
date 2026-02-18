import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Counter from "./Counter";
import Profile from "./profile";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("Anonymous");
  const [finalAge, setFinalAge] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setFinalName(name === "" ? "Anonymous!" : name);
    setFinalAge(count);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Nama"
        value={name}
        onChangeText={setName}
      />

      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handlePassValue={handlePassValue}
      />

      <Profile name={finalName} age={finalAge} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
