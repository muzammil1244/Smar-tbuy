import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";

const Create = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const lentfun = async () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate("Login");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardAppearance="dark"
              placeholder="Enter Email"
              style={styles.input}
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Enter Password"
              style={styles.input}
              secureTextEntry={true}
              placeholderTextColor="gray"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.createButton} onPress={lentfun}>
              <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "85%",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1c1c1c",
    width: "100%",
    borderRadius: 15,
    padding: 15,
    color: "white",
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
  },
  createButton: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  createButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    color: "white",
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
});

export default Create;
