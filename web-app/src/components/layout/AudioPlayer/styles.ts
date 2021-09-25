import { InfoContainer } from 'src/components/views/AudioInfo/styles';
import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const PlayerContainer = styled.div`
  background: ${themeColor.white};
  position: relative;
  margin: auto;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 5px 5px 15px rgba(54, 79, 60, 0.4);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:hover ${InfoContainer} {
    transform: translateY(0px);
  }
`;
