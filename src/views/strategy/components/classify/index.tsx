import React from 'react';
import type { ReactNode, FC } from 'react';
import { ClassiFyWrapper } from './styled';
import Caption from '../caption';
interface IProps {
  children?: ReactNode;
}
const ClassFy: FC<IProps> = () => {
  return (
    <ClassiFyWrapper>
      <div className="w-[70%] m-auto ">
        <Caption title="国际学校五大分类" />
        <img
          src={require('../../../../assets/images/biaoti.png')}
          alt=""
          className="w-[60%] h-[282px] ml-[-31%] absolute left-1/2  t-[115px] m-auto mt-[7rem] "
        />
        <div className="w-70% h-[100%] m-auto relative">
          <div className="school-list1">
            <span className="schoolitem">双语民办学校</span>
            <span>选择广，可以高考，也可以</span>
            <span>走国际路线，而缺点是</span>
            <span>费妈费娃</span>
            <a
              href="https://www10.53kf.com/webCompany.php?arg=10237796&kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&style=14"
              target="_blank"
              rel="noreferrer"
            >
              点击咨询
            </a>
          </div>
          <div className="school-list2">
            <span className="schoolitem">外籍女子学校</span>
            <span>选择广，可以高考，也可以</span>
            <span>走国际路线，而缺点是</span>
            <span>费妈费娃</span>
            <a
              href="https://www10.53kf.com/webCompany.php?arg=10237796&kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&style=14"
              target="_blank"
              rel="noreferrer"
            >
              点击咨询
            </a>
          </div>
          <div className="school-list3">
            <span className="schoolitem">公办国际部</span>
            <span>部分压力很大，用体制内鸡</span>
            <span>娃模式学体制外课程;适合</span>
            <span>外籍身份的中国鸡血家庭</span>
            <a
              href="https://www10.53kf.com/webCompany.php?arg=10237796&kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&style=14"
              target="_blank"
              rel="noreferrer"
            >
              点击咨询
            </a>
          </div>
          <div className="school-list4">
            <span className="schoolitem">优质特殊办公</span>
            <span>
              带学籍的国际路线，但也需要体制内课程，要学得好，也压力比较大，也不如纯国际学校更国际化
            </span>
            <a
              href="https://www10.53kf.com/webCompany.php?arg=10237796&kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&style=14"
              target="_blank"
              rel="noreferrer"
            >
              点击咨询
            </a>
          </div>
          <div className="school-list5">
            <span className="schoolitem">民办融合部</span>
            <span>纯体制内，费用低，但选择 国际路线需要在七年级前切 换赛道</span>
            <a
              href="https://www10.53kf.com/webCompany.php?arg=10237796&kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&style=14"
              target="_blank"
              rel="noreferrer"
            >
              点击咨询
            </a>
          </div>
        </div>
      </div>
    </ClassiFyWrapper>
  );
};
export default ClassFy;
