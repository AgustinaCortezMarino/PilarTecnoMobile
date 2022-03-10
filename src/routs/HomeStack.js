import React, { Component } from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";

import { createStackNavigator } from "@react-navigation/stack";
const PostsStack = createStackNavigator();
export const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Home" component={Home} />
      <PostsStack.Screen name="Login" component={Login} />
    </PostsStack.Navigator>
  );
};
