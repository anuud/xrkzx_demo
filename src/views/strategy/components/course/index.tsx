import React from 'react';
import type { ReactNode, FC } from 'react';
import { CourseWrapper } from './styled';
interface IProps {
  children?: ReactNode;
}
const Curse: FC<IProps> = () => {
  return (
    <CourseWrapper>
      <div className="w-[70%] m-auto">123</div>
    </CourseWrapper>
  );
};
export default Curse;
