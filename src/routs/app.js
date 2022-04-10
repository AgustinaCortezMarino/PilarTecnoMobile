import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "./Tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Profile from "../screens/Profile";
import Mapa from "../screens/Map";
import Login from "../screens/Auth/Singin";
import { useSelector } from "react-redux";
import Listitem from "../screens/ListItem";

const Stack = createStackNavigator();

export default AppStack = (props) => {
  const user = useSelector((state) => state.user.user);
  // const isloged = true;
  return (
    <Stack.Navigator headerMode="none">
      {user ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="LogIn" component={Login} />
      )}
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="List" component={List} />
      <HomeStack.Screen name="Listitem" component={Listitem} />

      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Map" component={Mapa} />
    </Stack.Navigator>
  );
};
