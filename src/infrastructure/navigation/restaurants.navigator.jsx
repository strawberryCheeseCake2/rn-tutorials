import { View, Text } from "react-native";
import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        // ...TransitionPresets.ModalPresentationIOS,
      }}>
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
