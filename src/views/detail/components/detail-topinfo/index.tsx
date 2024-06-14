import React from 'react';
import type { ReactNode, FC } from 'react';
import { DetailTopInfoWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  name: string;
  istext?: string;
}
const DetailTopinfo: FC<IProps> = (props) => {
  const { name, istext } = props;
  return (
    <DetailTopInfoWrapper>
      <i className="m-1 rounded-full border">
        <img src={require('../../../../assets/images/school/product13.png')} alt="" />
      </i>
      <div className="leading-[4rem] text-xl font-bold ml-1">
        <span className="text-black cursor-pointer item">
          {name}
          <span className="text-orange-400 ml-1">{istext}</span>
        </span>
      </div>
    </DetailTopInfoWrapper>
  );
};
export default DetailTopinfo;
