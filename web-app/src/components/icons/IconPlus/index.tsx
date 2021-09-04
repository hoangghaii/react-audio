import { FC } from 'react';
import { IconPropsType } from 'src/features/common';

export const IconPlus: FC<IconPropsType> = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6V12M12 12V18M12 12H18M12 12H6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
