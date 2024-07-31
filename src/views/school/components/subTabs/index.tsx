import React from 'react';
import type { ReactNode, FC } from 'react';
import { SubTabsWrapper } from './styled';
import { RightOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
  name: string;
  tabClick: (name: string, courseL: string) => void;
}
const courseInfo: any[] = [
  {
    _id: nanoid(),
    courseL: 'A-Level课程'
  },
  {
    _id: nanoid(),
    courseL: 'IG课程'
  },
  {
    _id: nanoid(),
    courseL: 'IB课程'
  },
  {
    _id: nanoid(),
    courseL: 'DSE课程'
  },
  {
    _id: nanoid(),
    courseL: 'AP课程'
  }
];
const SubTitle: FC<IProps> = (props) => {
  const { name, tabClick } = props;
  const nav = useNavigate();
  const changCursel = (name: string, courseL: string) => {
    tabClick(name, courseL);
  };
  const handlecNav = () => {
    nav('/academy');
  };
  return (
    <SubTabsWrapper>
      <h1>{name}国际学校</h1>
      <div className="h-[32px]">
        <ul className="flex tabs-items">
          {courseInfo.map((item: any) => {
            return (
              <li key={item._id}>
                <a className="item" onClick={() => changCursel(name, item.courseL)}>
                  {item.courseL}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <span onClick={() => handlecNav()} className="tabs-right">
        更多学校
        <RightOutlined />
      </span>
    </SubTabsWrapper>
  );
};
export default SubTitle;
