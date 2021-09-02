import { FC } from 'react';
import { IconPropsType } from 'src/features/common';

export const IconFastForward: FC<IconPropsType> = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.555 5.16803C4.4044 5.06755 4.22935 5.00984 4.04852 5.00106C3.86769 4.99227 3.68786 5.03274 3.52823 5.11815C3.36861 5.20356 3.23516 5.33071 3.14213 5.48602C3.0491 5.64133 2.99997 5.81898 3 6.00003V14C2.99997 14.1811 3.0491 14.3587 3.14213 14.514C3.23516 14.6693 3.36861 14.7965 3.52823 14.8819C3.68786 14.9673 3.86769 15.0078 4.04852 14.999C4.22935 14.9902 4.4044 14.9325 4.555 14.832L10 11.202V14C9.99997 14.1811 10.0491 14.3587 10.1421 14.514C10.2352 14.6693 10.3686 14.7965 10.5282 14.8819C10.6879 14.9673 10.8677 15.0078 11.0485 14.999C11.2293 14.9902 11.4044 14.9325 11.555 14.832L17.555 10.832C17.692 10.7407 17.8043 10.617 17.8819 10.4718C17.9596 10.3267 18.0002 10.1646 18.0002 10C18.0002 9.83541 17.9596 9.67335 17.8819 9.52821C17.8043 9.38307 17.692 9.25935 17.555 9.16803L11.555 5.16803C11.4044 5.06755 11.2293 5.00984 11.0485 5.00106C10.8677 4.99227 10.6879 5.03274 10.5282 5.11815C10.3686 5.20356 10.2352 5.33071 10.1421 5.48602C10.0491 5.64133 9.99997 5.81898 10 6.00003V8.79803L4.555 5.16803Z"
        fill="currentColor"
      />
    </svg>
  );
};
