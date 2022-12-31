import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components";

import RestaurantsScreen from "./features/restaurants/screens/restaurants.screen";
import { theme } from "./infrastructure/theme";

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>

      
        <RestaurantsScreen />
      
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
