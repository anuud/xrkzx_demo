import React, { useRef, useState } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';
import { SchoolWrapper } from './styled';
import SubTitle from './components/subTabs';
import { strategy_school } from '../../assets/data/strategy_school';
import SubSchool from './components/subschool';
import { bannerlist } from '../../assets/data/bannerList';
import { Carousel } from 'antd';
interface IProps {
  children?: ReactNode;
}
const School: FC<IProps> = () => {
  const [schoolInfo, setSchoolInfo] = useState(strategy_school[0].list);
  const [, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

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
          autoplaySpeed={2000}
          effect="fade"
          ref={bannerRef}
          afterChange={handleAfterChange}
        >
          {bannerlist?.map((item) => {
            return (
              <div className="banner-item h-full" key={item._id}>
                <img className="image" src={item.url} style={{ height: '559px', width: '100%' }} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="my-2">
        <SubTitle name="南山区国际学校" tabClick={tabClick} />
        <SubSchool schoolInfo={schoolInfo} />
      </div>
    </SchoolWrapper>
  );
};
export default School;
