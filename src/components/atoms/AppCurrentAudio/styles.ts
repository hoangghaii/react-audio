import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const AudioContainer = styled.div`
  text-align: center;
  margin-top: -3px;
`;

export const SongName = styled.h2`
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 3px;
  color: ${themeColor.dark};
  width: 85%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`;

export const ArtistName = styled.h3`
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  margin: 0;
  font-size: 0.6em;
  letter-spacing: 1.5px;
  color: ${themeColor.lightenDark};
  margin-top: 5px;
`;
