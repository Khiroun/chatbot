import { StatusBar } from "expo-status-bar";

import ChatScreen from "./ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ChatScreen}
            options={{
              title: "Airline chatBot",
              headerStyle: {
                backgroundColor: "#303F9F",
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
