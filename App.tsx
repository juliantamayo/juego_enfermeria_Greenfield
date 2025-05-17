import "intl-pluralrules";
import "./src/i18n";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { screens } from "@navigation/screens";
import type { RootStackParamList } from "@navigation/types";
import { Colors } from "@styles-theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.brand.color_1,
          },
        }}
      >
        {screens.map(({ name, component, options }) => (
          <Stack.Screen key={name} name={name} component={component} options={options} />
        ))}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
