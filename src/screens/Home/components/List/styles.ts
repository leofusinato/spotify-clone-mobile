import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-bottom: 24px;
`;

export const MusicListContainer = styled.View`
  gap: 16px;
`;
