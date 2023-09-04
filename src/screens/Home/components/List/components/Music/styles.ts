import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Number = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-right: 16px;
`;

export const MusicPhoto = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

export const Listeners = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: 500;
`;
