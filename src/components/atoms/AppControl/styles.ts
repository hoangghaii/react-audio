import { themeColor } from 'src/features/common';
import styled from 'styled-components';

const Hover = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: ${themeColor.lightenDark};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  justify-content: center;
  color: ${themeColor.secondary};
`;

export const PlayPause = styled(Hover)`
  margin: 15px 25px;
  color: ${themeColor.dardSecondary};
`;

export const Option = styled(Hover)`
  left: 10px;
  position: absolute;
  font-size: 0.8em;
`;

export const Add = styled(Hover)`
  right: 10px;
  position: absolute;
  font-size: 0.8em;
`;

export const Volume = styled(Hover)`
  margin-right: 30px;
  font-size: 0.8em;
`;

export const Shuffle = styled(Hover)`
  margin-left: 30px;
  font-size: 0.8em;
`;

export const Previous = styled(Hover)``;

export const Next = styled(Hover)``;
