import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeServiceWrapper } from './styled';
import AreaCaption from '../../../../components/area-caption';
import { useAppSelector } from '../../../../store';
import { shallowEqual } from 'react-redux';
interface IProps {
  children?: ReactNode;
}
const HomeService: FC<IProps> = () => {
  // const { waiterlist } = useAppSelector(
  //   (state) => ({
  //     waiterlist: state.homelist.waiterlist
  //   }),
  //   shallowEqual
  // );

  return (
    <HomeServiceWrapper>
      <div className="w-4/5 m-auto wrap pt-2">
        <AreaCaption text="SERVICE" page="留学多对一服务流程" />
      </div>
      <div className="w-4/5 m-auto wrap pt-2 pb-5 mb-5">
        {/* <div className="card">
          {waiterlist?.map((item) => {
            return (
              <div className="item" key={item._id}>
                <div className="item-list">
                  <div className="title">- {item._id} -</div>
                  <div className="img ">
                    <img src={item.image_url} alt="" />
                  </div>
                  <div className="text">
                    <p>{item.name}</p>
                  </div>
                </div>
                <div className="desc">
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </HomeServiceWrapper>
  );
};
export default HomeService;
