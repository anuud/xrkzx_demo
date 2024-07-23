import React, { useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { AcademyWrapper } from './styled';
import AcdemySelect from './components/academy-select';
import AcademyDetail from './components/academy-detail';
import { useAppDispatch } from '../../store';
import { fetchAcademyDataAction } from './store/academy';
interface IProps {
  children?: ReactNode;
}
const Academy: FC<IProps> = () => {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchAcademyDataAction());
  }, []);
  return (
    <AcademyWrapper>
      <AcdemySelect />
      <AcademyDetail />
    </AcademyWrapper>
  );
};
export default Academy;
