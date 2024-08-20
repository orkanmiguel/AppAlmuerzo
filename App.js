import {
  NavigationContainer,
  createSwitchNavigator,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsScreen from "./screens/Meals";
import ModalScreen from "./screens/Modal";
/* import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register"; */

//onboarding son pantallas para mantener al ususario ahi, por ejemplo login, registro

const AppNavigator = createStackNavigator();

function MyStack() {
  return (
    <AppNavigator.Navigator initialRouteName="Meals">
      <AppNavigator.Screen
        name="Meals"
        component={MealsScreen}
        options={{
          title: "Comida",
          headerBackTitleVisible: true,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "red" },
        }}
      />
      <AppNavigator.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          title: "Modal",
          headerBackTitleVisible: true,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "red" },
        }}
      />
    </AppNavigator.Navigator>
  );
}

const RootStack = createStackNavigator();

function MyRootStack() {
  return (
    <RootStack.Navigator initialRouteName="Modal">
      <RootStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          headerBackTitleVisible: true,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "red" },
        }}
      />
    </RootStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
