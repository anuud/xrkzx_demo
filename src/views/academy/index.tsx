import React from 'react';
import type { ReactNode, FC } from 'react';
import { AcademyWrapper } from './styled';
import AcdemySelect from './components/academy-select';
import AcademyDetail from './components/academy-detail';
interface IProps {
  children?: ReactNode;
}
const Academy: FC<IProps> = () => {
  return (
    <AcademyWrapper>
      <AcdemySelect />
      <AcademyDetail />
    </AcademyWrapper>
  );
};
export default Academy;
