import { themeColor } from 'src/features/common';
import styled from 'styled-components';

export const ProgressBar = styled.div`
  height: 5px;
  width: 73%;
  margin: 6% auto;
  background: ${themeColor.lightenLight};
  border-radius: 10px;
  font-family: 'Questrial', sans-serif;
`;

const TimeContainer = styled.div`
  color: ${themeColor.dark};
  font-size: 10px;
  position: absolute;
  margin-top: -2px;
`;

export const TimeCurrent = styled(TimeContainer)`
  left: 15px;
`;

export const TimeTotal = styled(TimeContainer)`
  right: 15px;
`;

type FillPropsType = {
  played: number;
};

export const Fill = styled.div<FillPropsType>`
  background-color: ${themeColor.secondary};
  width: ${(props) => props.played * 100}%;
  height: 0.3rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s;
`;
