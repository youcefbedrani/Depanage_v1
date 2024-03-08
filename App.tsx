import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home_L from "./src/screens/auth/Home_L";
import SignUp from "./src/screens/auth/SignUp";
import Home_S from "./src/screens/auth/Home_S";
import Home_F from "./src/screens/Home_F";
import Home_C from "./src/screens/Home_C";
import Home_L_D from "./src/screens/Auth/Home_L_D";
import User_Home from "./src/screens/User_Home";
// const Stack = createNativeStackNavigator();
import 'react-native-gesture-handler';

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS, // Apply slide transition
        }}
        initialRouteName="Home_F"
      >
        <Stack.Screen
          name="Home_F"
          component={Home_F}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_C"
          component={Home_C}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_L_D"
          component={Home_L_D}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_L"
          component={Home_L}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_S"
          component={Home_S}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User_Home"
          component={User_Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
