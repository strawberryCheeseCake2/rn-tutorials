import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./infrastructure/theme";
import { RestaurantsContextProvider } from "./services/restaurants/restaurants.context";
import { LocationContextProvider } from "./services/location/location.context";
import Navigation from "./infrastructure/navigation";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.current,
  },
});
