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
import IconBTN from "./components/ui/icon-btn";
import ExpensesProvider from "./services/expenses-provider";
import { useWindowDimensions } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const OtherScreens = () => {
  const { width } = useWindowDimensions();

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: { fontFamily: "samim" },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          height: width > 500 ? "15%" : "8%",
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: GlobalStyles.colors.primary50,
        tabBarLabelStyle: {
          fontFamily: "samim",
          fontSize: 15,
          marginBottom: width > 500 ? 0 : 8,
        },
        headerRight: ({ tintColor }) => (
          <IconBTN
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageScreen");
            }}
          />
        ),
      })}
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
      <ExpensesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              headerTitleStyle: { fontFamily: "samim" },
            }}
          >
            <Stack.Screen
              name="OtherScreens"
              component={OtherScreens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageScreen"
              component={ManageExpensesScreen}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesProvider>
    </>
  );
}
