import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px 24px;
`;

export const MonthlyListeners = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const FollowContainer = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  align-items: center;
  justify-content: center;
`;

export const FollowText = styled.Text`
  font-size: 10px;
  font-family: "Abel_400Regular";
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const ActionsContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
