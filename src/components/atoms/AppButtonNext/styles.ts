import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const ButtonNext = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: ${themeColor.lightenDark};
  }
`;
