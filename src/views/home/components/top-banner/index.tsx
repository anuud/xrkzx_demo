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
  const [, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  // 从store中获取数据
  const { bannerlist } = useAppSelector(
    (state) => ({
      bannerlist: state.homelist.bannerlist
    }),
    shallowEqual
  );
  function handleAfterChange(current: number) {
    setCurrentIndex(current);
  }

  return (
    <TopBannerWrapper>
      <div className="w-3/5 m-auto">
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            effect="fade"
            ref={bannerRef}
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
        {/* <div>
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
              <img
                src={require('../../../../assets/images/home/14d6296df26b19663c4c6fa3a59d1dd9dd44ba42.png')}
                alt=""
              />
              <h5 className="text-sm font-bold p-2">名校榜单</h5>
              <span>TOP10 | 热门学校</span>
            </div>
            <div className="text-center">
              <img
                src={require('../../../../assets/images/home/3e89f98864ccc3648065480a26c453d6d77941ec.png')}
                alt=""
              />
              <h5 className="text-sm font-bold p-2">向日葵探校</h5>
              <span>打卡校园 | 一探究竟</span>
            </div>
            <div className="text-center">
              <img
                src={require('../../../../assets/images/home/b925958892bb265c885d162b339237df9380cddc.png')}
                alt=""
              />
              <h5 className="text-sm font-bold p-2">校园看点</h5>
              <span>学生社团 | 升学毕业</span>
            </div>
          </div>
        </div> */}
      </div>
    </TopBannerWrapper>
  );
};
export default TopBanner;
