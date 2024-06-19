import React from 'react';
import type { ReactNode, FC } from 'react';
import { SubTabsWrapper } from './styled';
import { RightOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
  name: string;
  tabClick: (item: string) => void;
}
const courseInfo: any[] = [
  {
    _id: nanoid(),
    courseL: 'A-Level课程'
  },
  {
    _id: nanoid(),
    courseL: 'IG/OSSD课程'
  },
  {
    _id: nanoid(),
    courseL: 'IB课程'
  },
  {
    _id: nanoid(),
    courseL: '香港DSE课程'
  },
  {
    _id: nanoid(),
    courseL: 'OSSD课程'
  }
];
const SubTitle: FC<IProps> = (props) => {
  const { name, tabClick } = props;
  const nav = useNavigate();
  const changCursel = (courseL: string) => {
    tabClick(courseL);
  };
  const handlecNav = () => {
    nav('/academy');
  };
  return (
    <SubTabsWrapper>
      <h1>{name}</h1>
      <div className="h-[32px]">
        <ul className="flex">
          {courseInfo.map((item: any) => {
            return (
              <li key={item._id}>
                <a className="item" onClick={() => changCursel(item.courseL)}>
                  {item.courseL}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <span onClick={() => handlecNav()}>
        更多学校
        <RightOutlined />
      </span>
    </SubTabsWrapper>
  );
};
export default SubTitle;
