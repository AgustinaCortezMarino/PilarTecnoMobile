import React, { Component } from "react";

import List from "../screens/List";

import { createStackNavigator } from "@react-navigation/stack";
const ListStack = createStackNavigator();
export const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} />
    </ListStack.Navigator>
  );
};
