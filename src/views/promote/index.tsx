import React from 'react';
import type { ReactNode, FC } from 'react';
import { PromoteWrapper } from './styled';
import { nanoid } from 'nanoid';
interface IProps {
  children?: ReactNode;
}
const list = [
  {
    _id: nanoid(),
    schoolname: '深圳国际交流书院',
    image_url: `${require('../../assets/images/promote/152406263313849_0.png')}`
  },
  {
    _id: nanoid(),
    schoolname: '深圳贝赛思学校',
    image_url: `${require('../../assets/images/promote/162452283043219_0.jpg')}`
  },
  {
    _id: nanoid(),
    schoolname: '深圳城市绿洲学校',
    image_url: `${require('../../assets/images/promote/153611934447933_0.png')}`
  },
  {
    _id: nanoid(),
    schoolname: '深圳市芸同学校',
    image_url: `${require('../../assets/images/promote/xuexiao2.jpg')}`
  }
];
const Promote: FC<IProps> = () => {
  return (
    <PromoteWrapper>
      <div>
        <img src={require('../../assets/images/promote/toplogo.png')} alt="" />
        <div className="text-xl leading-[3.5rem] font-bold text-center text-blue-400 ">
          双语/DSE/外籍等国际话学校入学有哪些门槛
        </div>
        <div className="flex flex-wrap">
          <img
            src={require('../../assets/images/promote/course_2.png')}
            alt=""
            className="m-auto"
          />
          <img
            src={require('../../assets/images/promote/course_3.png')}
            alt=""
            className="m-auto"
          />
        </div>
        <div>
          <img
            src={require('../../assets/images/promote/course_4.a3NJZ1Hf.png')}
            alt=""
            className="m-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <img src={require('../../assets/images/promote/course_5.RnhlAebv.png')} alt="" />
        <img
          src={require('../../assets/images/promote/course_6.soPz2Lxj.png')}
          alt=""
          className="w-[689px] h-[792px]"
        />
      </div>
      <div>
        <div className="text-center text-2xl font-bold leading-[4.5rem]">
          直击目标学校，提前规划和准备
        </div>
        <div className="flex">
          {list.map((item) => {
            return (
              <div key={item._id} className="w-[24%] p-2 text-center">
                <img src={item.image_url} alt="" className="m-auto" />
                <span>{item.schoolname}</span>
              </div>
            );
          })}
        </div>
      </div>
    </PromoteWrapper>
  );
};
export default Promote;
