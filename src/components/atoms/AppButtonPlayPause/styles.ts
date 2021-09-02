import { themeColor } from 'src/features/common';
import styled from 'styled-components';

const Hover = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: ${themeColor.lightenDark};
  }
`;

export const ButtonPlayPause = styled(Hover)`
  margin: 15px 25px;
  color: ${themeColor.dardSecondary};
`;
