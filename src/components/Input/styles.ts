import { TextInput, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled(View)<ContainerProps>`
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main : "transparent"};

  margin-bottom: 6px;
`;

export const IconContainer = styled.View`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.background_primary};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 24px;
`;
