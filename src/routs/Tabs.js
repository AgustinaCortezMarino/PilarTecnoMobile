import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeStackScreen } from "./HomeStack";
import { ProfileStackScreen } from "./ProfileStack";
import { MapStackScreen } from "./MapStack";
import { ListStackScreen } from "./ListStack";
import { Icon } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      activeColor="green" //#f5c511' //'rgb(41,34,97)',
      inactiveColor="red"
      barStyle={{
        backgroundColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: (
            <Icon name={"home"} type="font-awesome-5" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: (
            <Icon name={"user"} type="font-awesome-5" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStackScreen}
        options={{
          tabBarIcon: (
            <Icon
              name={"marker"}
              type="font-awesome-5"
              size={20}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarIcon: (
            <Icon name={"map"} type="font-awesome-5" size={20} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
