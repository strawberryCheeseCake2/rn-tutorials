import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantsNavigator from "./restaurants.navigator";

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICON = {
  Restaurants: ["restaurant", "restaurant-outline"],
  Map: ["map", "map-outline"],
  Settings: ["cog", "cog-outline"],
};

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = TAB_ICON[route.name][focused ? 0 : 1];

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarStyle: { height: 70, paddingBottom: 8 },
  tabBarShowLabel: false,
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
