import React, { Component } from "react";
import Map from "../screens/Map";

import { createStackNavigator } from "@react-navigation/stack";
const PostsStack = createStackNavigator();
export const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Map" component={Map} />
    </PostsStack.Navigator>
  );
};
