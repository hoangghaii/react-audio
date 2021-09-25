import { FC } from 'react';
import { AppFooter } from 'src/components/views/AppFooter';
import { AudioContainer } from './styles';

export const AudioPage: FC = ({ children }) => {
  return (
    <AudioContainer>
      {children}
      <AppFooter />
    </AudioContainer>
  );
};
