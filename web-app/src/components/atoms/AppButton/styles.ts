import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const Button = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${themeColor.lightenDark};
  }
`;
