import React, { Component, useCallback } from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
const App = (props) => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App = () => {
  return <Home />;
};
