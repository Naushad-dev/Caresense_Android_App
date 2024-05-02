import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "../state/AuthContext";
import TabNavigation from "./TabNavigation";
import InitialScreen from "../screens/InitialScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { authState } = useContext(AuthContext);
  const authenticateduser = authState?.token;
  console.log("is user sigin", authenticateduser);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authState.token ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <>
            <Stack.Screen name="initialscreen" component={InitialScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
          </>
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
