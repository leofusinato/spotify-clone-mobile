import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { TabsStackParamList } from "./types";
import { Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme } from "styled-components/native";

const Tab = createBottomTabNavigator<TabsStackParamList>();

export default function TabsNavigation() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={24}
              color={focused ? colors.white : colors.gray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? colors.white : colors.gray,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={24}
              color={focused ? colors.white : colors.gray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? colors.white : colors.gray,
              }}
            >
              Search
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              size={24}
              color={focused ? colors.white : colors.gray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? colors.white : colors.gray,
              }}
            >
              Library
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
