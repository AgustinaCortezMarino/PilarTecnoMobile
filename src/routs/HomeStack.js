import React, { Component } from "react";
import Home from "../screens/Home";
import List from "../screens/List";
import Profile from "../screens/Profile";
import Map from "../screens/Map";

import { createStackNavigator } from "@react-navigation/stack";
const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="List" component={List} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Map" component={Map} />
    </HomeStack.Navigator>
  );
};
