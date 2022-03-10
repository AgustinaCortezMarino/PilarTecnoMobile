import React, { Component } from "react";
import Profile from "../screens/Profile";

import { createStackNavigator } from "@react-navigation/stack";
const PostsStack = createStackNavigator();
export const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Profile" component={Profile} />
    </PostsStack.Navigator>
  );
};
