import React, { Component, useCallback } from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import { AppStack } from "../routs/app";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App = () => {
  return <Home />;
};
