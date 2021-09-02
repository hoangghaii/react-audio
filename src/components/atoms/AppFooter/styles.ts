import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 0.5em;
  text-transform: uppercase;
  padding: 10px;
  color: ${themeColor.primary};
  letter-spacing: 3px;
  font-family: 'Questrial', sans-serif;
`;

export const FooterLink = styled.a`
  color: ${themeColor.white};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    color: ${themeColor.primary};
  }
`;
