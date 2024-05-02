import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Avatar, Button, Icon, IconButton } from "react-native-paper";
import {doctors_category} from "../config/Doc_Category"
import Doctor_card from "../components/general/Doctor_card";
import Carousal from "../components/general/Carousal";
import Doctors_List from "../components/general/Doctors_List";

const Home = ({navigation}) => {
  
 const doctors_categories= doctors_category;

  return (
    <SafeAreaView className="bg-[#FFFBF5] flex-1 justify-between pb-4 pt-8" >
      <ScrollView>
        <View className="bg-[#FFFBF5] flex-1 ">
          <View className="flex flex-row  items-center justify-evenly py-1 rounde">
        
            <View className="mr-16">
              <Text className="text-[16px] font-semibold ">
                Healthy Day  
              </Text>
              <Text className="text-xs font-thin text-gray-400 opacity-70">
                Keep taking care of your health
              </Text>
            </View>
            <View className="bg-slate-100  rounded-full">
              <IconButton
                icon="bell"
                iconColor={"#86efac"}
                size={15}
                onPress={() => navigation.navigate('Notification')}
              />
            </View>
          </View>

          <View className=" rounded-lg shadow-lg">
          <Carousal/>
          </View>

          <View className=" mx-2 flex flex-row justify-between  h-[280px]">
            <View className="bg-blue-200 p-4 flex justify-between pb-2 rounded-lg w-[180px] shadow-xl ">
              <View>
                <Text className="text-xl font-bold">Experence AI </Text>
                <Text className="text-xl font-bold mb-2">
                  Virtual Consultation
                </Text>

                <View className="mt-2">
                  <Text className="text-gray-500">Unleash the power of AI</Text>
                  <Text className="text-gray-500 ">
                    Check your health at fingertip
                  </Text>
                </View>
              </View>
              <View className="mt-2">
                <Button className="bg-white" mode="el" onPress={()=>navigation.navigate('explore')}>
                  Explore
                </Button>
              </View>
            </View>
            <View className="bg-yellow-200 p-4 flex justify-between pb-2 rounded-lg w-[180px] shadow-xl">
              <View>
                <Text className="text-xl font-bold">Specialized </Text>
                <Text className="text-xl font-bold mb-2">
                  Doctor Consultation
                </Text>

                <View className="mt-2">
                  <Text className="text-gray-500"> </Text>
                  <Text className="text-gray-500 ">
                    Consultation to Best Nearest Doctor in less time..
                  </Text>
                </View>
              </View>
              <View className="mt-2">
                <Button className="bg-white" mode="el" onPress={()=>navigation.navigate("nearby")}>
                  Check
                </Button>
              </View>
            </View>
          </View>

          <View className="mt-8 mx-4 rounded-lg shadow-xl bg-white px-2 py-4 border-1 border-y-white ">
            <Text className=" text-xl font-bold text-secondary-color ">
              Our Specialists
            </Text>
            <View className="mt-2 py-2 px-1">
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={doctors_categories}
                renderItem={({ item }) => (
                  <View className="bg-gray-200 rounded-full h-20 w-20 mx-2 flex justify-center items-center">
                    <LottieView
                      style={{ height: 100, width: 100 }}
                      source={item.path}
                      autoPlay
                      loop
                    />
                  </View>
                )}
                horizontal={true} // Enable horizontal scroll
                keyExtractor={(item) => item.id} // Unique key for each item
              />
            </View>
          </View>

          <View className=" mt-5 mx-3 p-4 bg-white rounded-lg">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-xl font-semibold">Top Doctor's</Text>
              <Text className="opacity-70 text-gray-500" onPress={()=>navigation.navigate("nearby")}>see all</Text>
            </View>

           <Doctors_List/>

          </View>
          <StatusBar hidden={false} />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;

