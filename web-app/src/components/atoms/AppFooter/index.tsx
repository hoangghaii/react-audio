import { FC } from 'react';
import * as Styc from './styles';

export const AppFooter: FC = () => {
  return (
    <Styc.Footer>
      made by{' '}
      <Styc.FooterLink href="https://codepen.io/juliepark">
        julie
      </Styc.FooterLink>{' '}
      ♡
    </Styc.Footer>
  );
};
