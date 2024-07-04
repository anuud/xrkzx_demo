import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeCrad1Wrapper } from './styled';
import { HomeCard1 } from '../../../../assets/data/home-crad1';
interface IProps {
  children?: ReactNode;
}
const HomeCrad1: FC<IProps> = () => {
  return (
    <HomeCrad1Wrapper>
      <div className="w-4/5 m-auto mt-7 bg-white item">
        <div className="flex justify-between ">
          {HomeCard1?.map((item) => {
            return (
              <div className="mb-4 text-center" key={item._id}>
                <img src={item.image_url} />
                <div className="ml-2">{item.text}</div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <div className="flex-1 crad-left">
            <h4 className="text-base font-bold p-2">入学诊断</h4>
            <p className="p-2 text-blue-400">
              有哪些国际化学校？需要什么入学条件？快速找到适合孩子的学校
            </p>
          </div>
          <div className="flex-1 crad-right ml-8">
            <h4 className="text-base font-bold p-2">学校大全</h4>
            <p className="p-2 text-blue-400">汇集各区国际高中、初中、小学、幼儿园等100+所学校</p>
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={require('../../../../assets/images/home/14d6296df26b19663c4c6fa3a59d1dd9dd44ba42.png')}
                alt=""
              />
            </div>
            <h5 className="text-sm font-bold p-2">名校榜单</h5>
            <span>TOP10 | 热门学校</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={require('../../../../assets/images/home/3e89f98864ccc3648065480a26c453d6d77941ec.png')}
                alt=""
              />
            </div>
            <h5 className="text-sm font-bold p-2">向日葵探校</h5>
            <span>打卡校园 | 一探究竟</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={require('../../../../assets/images/home/b925958892bb265c885d162b339237df9380cddc.png')}
                alt=""
              />
            </div>
            <h5 className="text-sm font-bold p-2">校园看点</h5>
            <span>学生社团 | 升学毕业</span>
          </div>
        </div>
        <div className="w-[100%] m-auto h-[500px] home-help">
          <span className="absolute left-[43%] text-white font-bold text-xl bottom-[23%]">
            立即帮我找学校
          </span>
        </div>
      </div>
    </HomeCrad1Wrapper>
  );
};
export default HomeCrad1;
