import { useContext } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 20px;
  background-color: white;
`;

const RestaurantsScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        {isLoading && <ActivityIndicator />}
        <View style={{ flex: 1 }}>
          <SearchContainer>
            <StyledSearchbar elevation ={0}/>
          </SearchContainer>
          <FlatList
            data={restaurants}
            renderItem={({item}) => {
              return <RestaurantInfoCard restaurant={item}/>
            }}
            keyExtractor={item => item.name}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
          />
        </View>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
