import { useContext } from "react";
import { Text, View, Pressable, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";


import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        {isLoading && <ActivityIndicator />}
        <View style={{ flex: 1 }}>
          <Search />
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }>
                  <RestaurantInfoCard restaurant={item} />
                </Pressable>
              );
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
