import { Text, View, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";


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
  return (
    <>
      <SafeArea>
        <View style={{ flex: 1 }}>
          <SearchContainer>
            <StyledSearchbar elevation ={0}/>
          </SearchContainer>
          <FlatList
            data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={item => item.name}
            contentContainerStyle={{ margin: 16 }}
          />
        </View>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
