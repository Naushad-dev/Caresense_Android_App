import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Input from "../components/form/Input";
import CustomButton from "../components/form/CustomButton";
import { Button } from "react-native-paper";
import Loader from "../components/general/Loader";
import { AuthContext } from "../state/AuthContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const { setislogin, setauthState } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!email || !password) {
        Alert.alert("Please fill all fields");
        setLoading(false);
        return; // Exit the function if validation fails
      }

      const { data } = await axios.post("/login", { email, password });
      console.log("Data from API:", data);

      await AsyncStorage.setItem("@auth", JSON.stringify(data));

      if (data.success) {
        setLoading(false);
        setauthState({
          Userid:data?.data?._id,
          name:data?.data?.name,
          email:data?.data?.email,
          token:data?.token
       
        });
        console.log("Login successful, token:", data.token);
        Alert.alert("Login Success", data?.message);
        navigation.navigate("TabNavigation");
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed"); // Handle specific API error messages
    }
  };

  return (
    <View className="flex-1  ">
      <KeyboardAvoidingView behavior="height" className="flex-1 justify-evenly">
        <View className="">
          <Text className="text-4xl ml-8 font-semibold mb-4">
            Welcome Back !
          </Text>
          <Text className="text-3xl ml-8  ">Sign In Now</Text>
        </View>
        <View>
          <Input label="Email" value={email} setValue={setemail} />
          <Input
            label="Password"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
        </View>

        <View>
          <CustomButton label={"Sign In"} onPress={handleLogin} />
        </View>
        <View>
          <Text className="text-center mt-2 text-gray-500 font-bold opacity-70 ">
            -----Or Sign In with-----
          </Text>
        </View>
        <View className="flex flex-row justify-evenly items-center">
          <Button icon="google" mode="outlined" textColor="#070F2B">
            Google
          </Button>
          <Button
            icon="facebook"
            mode="outlined"
            textColor="#070F2B"
            onPress={() => console.log("Pressed")}
          >
            Facebook
          </Button>
        </View>
        <Text className="text-center mt-2 text-gray-500 font-bold opacity-70">
          Not user yet ?{" "}
          <Text onPress={() => navigation.navigate("register")}>Register </Text>
        </Text>
        
      </KeyboardAvoidingView>
      {loading && <Loader />}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
