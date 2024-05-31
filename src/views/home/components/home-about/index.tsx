import React, { useRef, useState } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';
import { HomeAboutWrapper } from './styled';
import { useAppSelector } from '../../../../store';
import { shallowEqual } from 'react-redux';
import { Carousel } from 'antd';

interface IProps {
  children?: ReactNode;
}
const HomeAbouut: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const { aboutimagelist } = useAppSelector(
    (state) => ({
      aboutimagelist: state.homelist.aboutimagelist
    }),
    shallowEqual
  );
  console.log(aboutimagelist);
  function handleAfterChange(current: number) {
    setCurrentIndex(current);
    console.log(currentIndex);
  }
  function handleimgchange() {
    if (!currentIndex) {
      return (
        <div className="right-item">
          <img src={aboutimagelist[0]?.image_url} className="image" />
        </div>
      );
    } else {
      return (
        <div className="right-item">
          <img src={aboutimagelist[currentIndex]?.image_url} className="image" />
        </div>
      );
    }
  }
  handleimgchange();
  return (
    <HomeAboutWrapper>
      <div className="left">
        {aboutimagelist?.map((item, index) => {
          return (
            <div key={item.img_id} className="item" onClick={() => handleAfterChange(index)}>
              <img src={item.image_url} alt="" />
            </div>
          );
        })}
      </div>
      <div className="right">
        <Carousel autoplay={false} dots={false} effect="fade" ref={bannerRef}>
          {handleimgchange()}
        </Carousel>
      </div>
    </HomeAboutWrapper>
  );
};
export default HomeAbouut;
