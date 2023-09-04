import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  max-height: 40%;
  justify-content: flex-end;
`;

export const PlaylistName = styled.Text`
  font-family: "Abel_400Regular";
  font-size: 55px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 8px;
`;
