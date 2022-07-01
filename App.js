import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Homez" }}
        />
        <Stack.Screen name="Reviews" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
