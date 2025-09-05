import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpensesScreen from "./screens/manage-expenses-screen";
import AllExpensesScreen from "./screens/all-expenses-screen";
import RecentExpensesScreen from "./screens/recent-expenses-screen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const OtherScreens = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="AllScreen" component={AllExpensesScreen} />
      <BottomTabs.Screen name="RecentScreen" component={RecentExpensesScreen} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="OtherScreens" component={OtherScreens} />
          <Stack.Screen name="ManageScreen" component={ManageExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
