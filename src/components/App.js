import React, { Component, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import { AppStack } from "../routs/app";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../store";
import { hasLocationPermission } from "../../LocationPermission";

export default App = () => {
  useEffect(() => {
    hasLocationPermission();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
