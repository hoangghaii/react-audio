import { themeColor } from 'src/features/common';
import styled from 'styled-components';

const Hover = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: ${themeColor.lightenDark};
  }
`;

export const ButtonShuffle = styled(Hover)`
  margin-left: 30px;
  font-size: 0.8em;
`;
