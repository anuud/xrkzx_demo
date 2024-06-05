import React, { useRef, useState } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';
import { BannerLeft, TopBannerWrapper } from './styled';
import { Carousel } from 'antd';
import { useAppSelector } from '../../../../store';
import { shallowEqual } from 'react-redux';

interface IProps {
  children?: ReactNode;
}
const TopBanner: FC<IProps> = () => {
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  console.log(currentIndex);

  // 从store中获取数据
  const { bannerlist } = useAppSelector(
    (state) => ({
      bannerlist: state.homelist.bannerlist
    }),
    shallowEqual
  );

  function handleBeforeChange() {
    // setCurrentIndex(-1)
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current);
  }

  return (
    <TopBannerWrapper>
      <div className="w-4/5 m-auto">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={3000}
            effect="fade"
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {bannerlist?.map((item) => {
              return (
                <div className="banner-item" key={item.img_id}>
                  <img className="image" src={item.image_url} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
      </div>
    </TopBannerWrapper>
  );
};
export default TopBanner;
