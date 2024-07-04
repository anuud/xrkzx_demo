import React, { useRef, useState } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';
import { SchoolWrapper } from './styled';
import SubTitle from './components/subTabs';
import { strategy_school } from '../../assets/data/strategy_school';
import SubSchool from './components/subschool';
import { bannerlist } from '../../assets/data/bannerList';
import { Carousel } from 'antd';
import { useAppSelector } from '../../store';
import { shallowEqual } from 'react-redux';
interface IProps {
  children?: ReactNode;
}
const School: FC<IProps> = () => {
  const [schoolInfo, setSchoolInfo] = useState(strategy_school[0].list);

  /** 定义内部的数据 */
  const [, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  // // 从store中获取数据
  const { bannerinfo } = useAppSelector(
    (state) => ({ bannerinfo: state.homelist.bannerlist }),
    shallowEqual
  );
  function handleAfterChange(current: number) {
    setCurrentIndex(current);
  }
  const tabClick = (name: string) => {
    const info = strategy_school.filter((item) => item.name === name);
    setSchoolInfo(info[0].list);
  };

  return (
    <SchoolWrapper>
      <div className="school-top">
        <Carousel
          autoplay
          autoplaySpeed={3000}
          effect="fade"
          ref={bannerRef}
          afterChange={handleAfterChange}
        >
          {bannerinfo &&
            bannerinfo?.map((item) => {
              return (
                <div className="banner-item" key={item.filename}>
                  <img className="image h-[560px] w-full" src={item.banner_url} />
                </div>
              );
            })}
        </Carousel>
      </div>
      <div className="my-4">
        <SubTitle name="南山区国际学校" tabClick={tabClick} />
        <SubSchool schoolInfo={schoolInfo} />
      </div>
      <div className="my-4">
        <SubTitle name="福田区国际学校" tabClick={tabClick} />
        <SubSchool schoolInfo={schoolInfo} />
      </div>
    </SchoolWrapper>
  );
};
export default School;
