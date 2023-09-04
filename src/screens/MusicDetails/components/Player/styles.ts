import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grayLight};
`;

export const PauseContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;
