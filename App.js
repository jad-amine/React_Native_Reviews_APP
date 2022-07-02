import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";

// Screens

import NotificationsScreen from "./screens/NotificationsScreen";
import BottomNavigator from "./components/BottomNavigator";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "GameZone",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
          headerBackground: () => (
            <Image
              source={require("./assets/background.png")}
              style={{ height: 80 }}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={BottomNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
