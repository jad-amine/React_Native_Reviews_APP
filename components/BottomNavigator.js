import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import About from "../screens/About";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            color = focused ? "coral" : "black";
          } else if (route.name === "About") {
            iconName = focused ? "infocirlce" : "infocirlce";
            color = focused ? "coral" : "black";
          }
          return <AntDesign name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
