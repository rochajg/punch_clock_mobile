import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.greyCard};
  padding: ${({ theme }) => theme.spacing.m}px;
  margin: ${({ theme }) => theme.spacing.s}px ${({ theme }) => theme.spacing.m}px;
  justify-content: space-between;
  flex-direction: row;
  border-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};
`;

export const Hours = styled.View`
  flex-direction: row;
`;

export const Icon = styled.View`
  margin-top: 2px;
  margin-right: ${({ theme }) => theme.spacing.s}px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;
