import React from 'react';
import type { ReactNode, FC } from 'react';
import { SchoolWrapper } from './styled';
interface IProps {
  children?: ReactNode;
}
const School: FC<IProps> = () => {
  return <SchoolWrapper>School</SchoolWrapper>;
};
export default School;
