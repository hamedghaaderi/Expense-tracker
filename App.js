import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpensesScreen from "./screens/manage-expenses-screen";
import AllExpensesScreen from "./screens/all-expenses-screen";
import RecentExpensesScreen from "./screens/recent-expenses-screen";
import GlobalStyles from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const OtherScreens = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarLabelStyle: { fontFamily: "samim", fontSize: 15 },
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <BottomTabs.Screen
        name="AllScreen"
        component={AllExpensesScreen}
        options={{
          title: "همه مخارج",
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="RecentScreen"
        component={RecentExpensesScreen}
        options={{
          title: "مخارج اخیر",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  useFonts({
    samim: require("./assets/fonts/Samim.ttf"),
  });

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OtherScreens"
            component={OtherScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageScreen"
            component={ManageExpensesScreen}
            options={{
              titleL: "مدیریت مخارج",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
