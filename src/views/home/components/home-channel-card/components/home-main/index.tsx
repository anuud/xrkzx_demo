import React, { useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { HomeMainWrapper } from './styled';
import { homeschiillist } from '../../../../../../assets/data/homeschoollist';
import classNames from 'classnames';
interface IProps {
  children?: ReactNode;
}
const HomeMain: FC<IProps> = () => {
  const [currentTabid, setCurrentTabid] = useState('001');
  const [currentTab, setCurrentTab] = useState<any>();
  const tabchange = (item: any) => {
    setCurrentTabid(item._id);
    setCurrentTab([]);
    setCurrentTab(item);
    console.log(currentTab);
  };
  useEffect(() => {
    setCurrentTab([]);
    setCurrentTab(homeschiillist[0] as any);
  }, []);

  return (
    <HomeMainWrapper>
      <div className="flex items-center truncate main-nav">
        {homeschiillist &&
          homeschiillist?.map((item) => {
            return (
              <div
                className={classNames(
                  'font-semibold flex-1 text-center text-lg cursor-pointer h-10 leading-10 relative',
                  item._id === currentTabid ? 'active' : ''
                )}
                key={item._id}
                onClick={() => tabchange(item)}
              >
                {item.text}
              </div>
            );
          })}
      </div>
      <div className="w-full">
        {currentTab?.list?.length === 0 && 'loadding'}
        {currentTab?.list?.map((item: any) => {
          return (
            <div key={item._id}>
              <div className="flex h-9 mt-2 info text-xs overflow-hidden">
                <div className="mt-1 w-28 text-center leading-8 text-cyan-600">
                  【{item.guide}】
                </div>
                <div className="text-xs leading-9 truncate flex-1">{item.info}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HomeMainWrapper>
  );
};
export default HomeMain;
