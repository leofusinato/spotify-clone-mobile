import { Dimensions } from "react-native";

import styled from "styled-components/native";

const IMAGE_SIZE = Dimensions.get("window").width - 32;

export const ContentContainer = styled.View`
  padding: 0px 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const MusicPhoto = styled.Image`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  margin-top: 72px;
`;

export const MusicName = styled(Title)`
  font-size: 22px;
`;

export const Artist = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayLight};
  margin-top: 4px;
`;
