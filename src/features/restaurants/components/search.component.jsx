import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 20px;
  background-color: white;
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  
  return (
    <>
      <SearchContainer>
        <StyledSearchbar placeholder="Search for location" 
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
         elevation={0} />
      </SearchContainer>
    </>
  );
};

export default Search;
