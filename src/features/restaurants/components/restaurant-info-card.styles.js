import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  border-radius: 30px;
  margin-bottom: ${({theme}) => theme.space[3]};
  padding: ${props => props.theme.space[2]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
  border-radius: 30px;
`;

export const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Rating = styled.View`
  display: flex;
  flex-direction: row;

  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const Section = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;