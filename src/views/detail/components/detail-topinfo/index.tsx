import React from 'react';
import type { ReactNode, FC } from 'react';
import { DetailTopInfoWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  name: string;
  istext?: string;
  icon?: 'abstract' | 'information' | 'img';
}
const DetailTopinfo: FC<IProps> = (props) => {
  const { name, istext, icon } = props;
  const Image = () => {
    if (icon === 'abstract') {
      return <img src={require('../../../../assets/images/skin/product14.png')} alt="" />;
    } else if (icon === 'information') {
      return <img src={require('../../../../assets/images/skin/product15.png')} alt="" />;
    } else if (icon === 'img') {
      return <img src={require('../../../../assets/images/skin/product19.png')} alt="" />;
    }
    return <img src={require('../../../../assets/images/skin/product14.png')} alt="" />;
  };
  return (
    <DetailTopInfoWrapper>
      <i className="m-1 rounded-full border">
        <Image />
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
