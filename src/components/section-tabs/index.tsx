import React, { useState } from 'react';
import type { ReactNode, FC } from 'react';
import { SectionsTabsWrapper } from './styled';
import classNames from 'classnames';
interface IProps {
  children?: ReactNode;
  tabNames: any[];
  tabClick: (index: number, item: any) => void;
}
const SectionsTabs: FC<IProps> = (props) => {
  const { tabClick } = props;
  const [currentIndex, setcurrentIndex] = useState(0);
  function itemClickHandle(index: number, item: any) {
    setcurrentIndex(index);
    tabClick(index, item);
  }
  return (
    <SectionsTabsWrapper>
      <div className="flex">
        {props.tabNames.map((item, index) => {
          return (
            <div
              key={item._id}
              className={classNames('item', { active: index === currentIndex })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </SectionsTabsWrapper>
  );
};
export default SectionsTabs;
