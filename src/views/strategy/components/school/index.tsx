import React, { useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { SchoolStrategyWrapper } from './styled';
import Caption from '../caption';
import { strategy_school } from '../../../../assets/data/strategy_school';
import classNames from 'classnames';
interface IProps {
  children?: ReactNode;
}
const SchoolStrategy: FC<IProps> = () => {
  const [currentTabid, setCurrentTabid] = useState(0);
  const [currentTab, setCurrentTab] = useState<any>();
  const tabchange = (index: number, item: any) => {
    setCurrentTabid(index);
    setCurrentTab(item);
    console.log(currentTab);
  };

  useEffect(() => {
    setCurrentTab(strategy_school[0] as any);
  }, []);
  return (
    <SchoolStrategyWrapper>
      <div className="w-[70%] m-auto">
        <Caption title="国际学校择校 推荐入读学校" />
        <div className="w-[80%] m-auto">
          <div className="flex justify-around my-5">
            {strategy_school &&
              strategy_school.map((item, index) => {
                return (
                  <div
                    className={classNames('item', index === currentTabid ? 'active' : '')}
                    key={item._id}
                    onClick={() => tabchange(index, item)}
                  >
                    <div className="title">{item.name} </div>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-wrap w-[95%] cread m-auto">
            {currentTab?.list?.length === 0 && 'loadding'}
            {currentTab &&
              currentTab?.list?.map((item: any) => {
                return (
                  <div key={item._id} className=" w-[23%] mt-4 ml-[1.8%]">
                    <div className="w-[98%] h-[70%]">
                      <img src={item.image_url} alt="" />
                    </div>
                    <div className="text-center leading-7">{item.schoolname}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="w-[60%] m-auto text-center footer">
        <a href="">咨询更多学校</a>
      </div>
    </SchoolStrategyWrapper>
  );
};
export default SchoolStrategy;
