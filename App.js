import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Button, Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
          headerTitleStyle: { color: "white" },
          headerRight: () => (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 10,
                width: 60,
              }}
              onPress={() => alert("This is a button!")}
            >
              <Text style={{ color: "red", fontWeight: "bold" }}>Profile</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewDetails}
          options={{
            title: "Review Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
