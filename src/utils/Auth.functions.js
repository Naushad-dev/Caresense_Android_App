import axios from "axios";

export const RegisterUser = async (name, email, password) => {
  try {
    const { data } = await axios.post("http://192.168.10.1:6969/api/v1/register", {
      name,
      email,
      password,
    });

    console.log(data);
  } catch (error) {
        console.log("error from register function",error);
  }
};

const Loginuser = async () => {};
