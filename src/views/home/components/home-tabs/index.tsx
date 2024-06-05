import React, { useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { HomeTabsWrapper } from './style';
interface IProps {
  children?: ReactNode;
  tabData: any[];
}
const HomeTabs: FC<IProps> = (props) => {
  const { tabData } = props;
  const [currentTabid, setCurrentTabid] = useState('001');
  const [currentTab, setCurrentTab] = useState<any>();
  const tabchange = (item: any) => {
    setCurrentTabid(item.id);
    setCurrentTab(item);
  };
  useEffect(() => {
    setCurrentTab(props.tabData[0] as any);
    console.log(currentTab);
  }, []);
  return (
    <HomeTabsWrapper>
      <div className="flex items-center new-nav truncate">
        {tabData &&
          tabData?.map((item) => {
            return (
              <div
                className={classNames(
                  'font-semibold flex-1 text-center text-lg mr-2 cursor-pointer h-10 leading-10',
                  item.id === currentTabid ? 'active' : ''
                )}
                key={item.id}
                onClick={() => tabchange(item)}
              >
                {item.text}
              </div>
            );
          })}
      </div>
      <div>
        {currentTab?.newgatherlist?.length === 0 && 'load'}
        {currentTab?.newgatherlist?.map((item: any) => {
          return (
            <div key={item._id}>
              <div className="flex h-9 mt-2 info">
                <em className="hotnews-icon1 mt-1">{item._id}</em>
                <span className="text-xs leading-9 truncate">{item.list}</span>
              </div>
            </div>
          );
        })}
      </div>
    </HomeTabsWrapper>
  );
};
export default HomeTabs;
