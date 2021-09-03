import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const ButtonOption = styled.div`
  left: 10px;
  position: absolute;
  font-size: 0.8em;
`;

export const ButtonVolume = styled.div`
  margin-right: 30px;
  font-size: 0.8em;
`;

export const ButtonPlayPause = styled.div`
  margin: 15px 25px;
  color: ${themeColor.dardSecondary};
`;

export const ButtonShuffle = styled.div`
  margin-left: 30px;
  font-size: 0.8em;
`;

export const ButtonAdd = styled.div`
  right: 10px;
  position: absolute;
  font-size: 0.8em;
`;
