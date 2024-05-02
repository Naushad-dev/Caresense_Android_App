import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../state/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Carousal from "../components/general/Carousal";
import { Avatar, Card, IconButton } from "react-native-paper";
import CustomButton from "../components/form/CustomButton";
const Profile = ({ navigation }) => {
  const {authState, setauthState } = useContext(AuthContext);

  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150"); // Placeholder image

  const handleEditProfile = () => {
    navigation.navigate("EditProfile"); // Navigate to EditProfile screen
  };

  const handleSettings = () => {
    navigation.navigate("Settings"); // Navigate to Settings screen (optional)
  };

  const handleAboutUs = () => {
    navigation.navigate("AboutUs"); // Navigate to About Us screen (optional)
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem("@auth");
    setauthState({ token: "", user: null });
    navigation.replace("login");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <TouchableOpacity
          onPress={() => {
            /* Handle profile picture change */
          }}
        >
          <Image
            source={{ uri: imageUrl }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{authState.name}</Text>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <CustomButton label={"Edit Profile"} />
      </View>

      <ScrollView>
        <Card.Title
          className="rounded-lg mt-4 shadow-lg"
          title="Account Settings"
          style={{ margin: 10, backgroundColor: "white" }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="account"
              color="#86efac"
              size={50}
              style={{ backgroundColor: "white" }}
            />
          )}
        />
        <Card.Title
          className="rounded-lg mt-4 shadow-lg"
          title="Chats"
          style={{ margin: 10, backgroundColor: "white" }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="chat"
              color="#86efac"
              size={50}
              style={{ backgroundColor: "white" }}
            />
          )}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('allappointments')}>
        <Card.Title
        className="rounded-lg mt-4 shadow-lg"
        title="Appointments"
        
        style={{ margin: 10, backgroundColor: "white" }}
        left={(props) => (
          <Avatar.Icon
            {...props}
            
            icon="calendar"
            color="#86efac"
            size={50}
            style={{ backgroundColor: "white" }}
            
          />
        )}
      />
        </TouchableOpacity>
     
        <Card.Title
          className="rounded-lg mt-4 shadow-lg"
          title="About"
          style={{ margin: 10, backgroundColor: "white" }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="account"
              color="#86efac"
              size={50}
              style={{ backgroundColor: "white" }}
            />
          )}
        />
        <Card.Title
          className="rounded-lg mt-4 shadow-lg"
          title="Apply as Doctor"
          style={{ margin: 10, backgroundColor: "white" }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="account"
              color="#86efac"
              size={50}
              style={{ backgroundColor: "white" }}
            />
          )}
        />
        <TouchableOpacity onPress={handleLogout}>
        <Card.Title
          className="rounded-lg mt-4 shadow-lg"
          title="Logout"
      
          style={{ margin: 10, backgroundColor: "white" }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="logout"
              color="#86efac"
              size={50}
              style={{ backgroundColor: "white" }}
              
            />
          )}
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;
