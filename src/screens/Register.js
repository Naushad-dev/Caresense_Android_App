import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/form/Input";
import CustomButton from "../components/form/CustomButton";
import { Button } from "react-native-paper";
import Loader from "../components/general/Loader";
import { RegisterUser } from "../utils/Auth.functions";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
const Register = ({ navigation }) => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [loading, setloading] = useState(false);

  const handleRegister = async () => {
    try {
      setloading(true)
      if(!name || !email || !password ){
          Alert.alert("Please fill all the fields")

      }
      setloading(false)
      const {data}= await axios.post("/register", {name,email,password})
      
      alert("User Register success", data?.message)
// const {data}= axios.get("http://192.168.10.109:6969/api/v1/users")
      console.log(data);
      console.log("Token " ,data.token);

      

      setname("")
      setemail("")
      setPassword("")
      navigation.navigate("login")

  } catch (error) {
      // alert(error.response.data.message)
      console.log(error)

  }
  };
  return (
    <SafeAreaView className="flex-1  ">
      <KeyboardAvoidingView behavior="height" className="flex-1 justify-evenly">
        <View className="">
          <Text
            className="text-6xl ml-8 font-semibold mb-4"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Hello !
          </Text>
          <Text
            className="text-4xl ml-8  "
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Sign Up Now
          </Text>
        </View>
        <View>
          <Input label="Name" value={name} setValue={setname} />
          <Input label="Email" value={email} setValue={setemail} />
          <Input
            label="Password"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
        </View>

        <View>
          <CustomButton
            label={"Sign Up"}
            onPress={handleRegister}
          />
        </View>
        <View>
          <Text className="text-center mt-2 text-gray-500 font-bold opacity-70 ">
            -----Or Sign Up with-----
          </Text>
        </View>
        <View className="flex flex-row justify-evenly items-center">
          <Button
            icon="google"
            mode="outlined"
            textColor="#070F2B"
            onPress={() => console.log("Pressed")}
          >
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
          Already user ?{" "}
          <Text onPress={() => navigation.navigate("login")}>Login </Text>
        </Text>
 
      </KeyboardAvoidingView>
      {loading && <Loader/>}
      <StatusBar hidden={false} />
      </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
