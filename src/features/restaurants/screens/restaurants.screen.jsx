import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight ?? 0}px;
  `;

  const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]};
  `;

  const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${props => props.theme.space[3]};
  `;

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    // flex: 1,
    padding: 16,
  },
  listContainer: {
    // display: "flex",

    backgroundColor: "green",
    flex: 1,
    padding: 16,
  },
});

export default RestaurantsScreen;
