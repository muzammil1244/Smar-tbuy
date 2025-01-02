import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const lentfun = async () => {
    if (email.length < 1 && password.length < 1) {
      alert("Please enter email and password");
      return false;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("MainHome");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
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
            <TouchableOpacity style={styles.loginButton} onPress={lentfun}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" }}
              style={styles.socialLogo}
            />
            <Text style={styles.socialButtonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" }}
              style={styles.socialLogo}
            />
            <Text style={styles.socialButtonText}>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <Text style={styles.footerText}>Don't have an account? Sign Up</Text>
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
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "85%",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "black",
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
  },
  loginButton: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "white",
    marginVertical: 10,
    fontSize: 16,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    marginBottom: 15,
  },
  socialLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: "black",
    fontSize: 16,
  },
  footerText: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
});

export default Login;
