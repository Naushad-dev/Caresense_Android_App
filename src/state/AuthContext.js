import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

axios.defaults.baseURL = "https://caresense.onrender.com/api/v1";
// axios.defaults.baseURL = "http://192.168.10.110:6969/api/v1";
// axios.defaults.baseURL="http://192.168.71.100:6969/api/v1"

// axios.defaults.headers.common["Authorization"] = `Bearer ${authState.token}`
export const AuthProvider = ({ children }) => {
  const [authState, setauthState] = useState({
    Userid: "",
    name: "",
    email: "",
    token: "",
  });

  const getUserData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Data from local storage", data);
    let loginData = JSON.parse(data);
    console.log("data after parsing", loginData);
    setauthState({
      Userid: loginData.data._id,
      name: loginData.data.name,
      email: loginData.data.email,
      token: loginData.token,
    });
  };

  useEffect(() => {
    console.log("user data fetching");
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setauthState }}>
      {children}
    </AuthContext.Provider>
  );
};
