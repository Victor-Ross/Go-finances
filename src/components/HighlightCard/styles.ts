import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  `}
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type, theme }) =>
    type === 'up' &&
    css`
      color: ${theme.colors.success};
    `}
  ${({ type, theme }) =>
    type === 'down' &&
    css`
      color: ${theme.colors.attention};
    `}
  ${({ type, theme }) =>
    type === 'total' &&
    css`
      color: ${theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  `}
  font-size: ${RFValue(32)}px;

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text};
  `}
  font-size: ${RFValue(12)}px;
`;
