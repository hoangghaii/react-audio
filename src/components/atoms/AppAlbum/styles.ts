import { themeColor } from 'src/features/common';
import styled from 'styled-components';

type AlbumPropsType = {
  imgSrc: string;
};

export const Album = styled.div<AlbumPropsType>`
  background: linear-gradient(rgba(54, 79, 60, 0.25), rgba(73, 101, 77, 0.55)),
    url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: 300px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
`;

type HeartPropsType = {
  isHeart: boolean;
};

export const Heart = styled.div<HeartPropsType>`
  position: absolute;
  right: 0;
  cursor: pointer;
  color: ${(props) =>
    props.isHeart ? themeColor.redChiGong : themeColor.white};
  margin: 10px;
  transition: all 0.4s ease;
`;
