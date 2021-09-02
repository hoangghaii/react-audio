import { IconPropsType } from '@/features/common';
import { FC } from 'react';

export const IconVolumeOff: FC<IconPropsType> = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 15H5.586L10.293 19.707C10.923 20.337 12 19.891 12 19V5.00001C12 4.10901 10.923 3.66301 10.293 4.29301L5.586 9.00001H4C3.73478 9.00001 3.48043 9.10536 3.29289 9.2929C3.10536 9.48044 3 9.73479 3 10V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15Z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12L21 14M17 14L19 12L17 14ZM19 12L21 10L19 12ZM19 12L17 10L19 12Z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
