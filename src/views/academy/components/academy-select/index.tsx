import React, { useState } from 'react';
import type { ReactNode, FC } from 'react';
import { AcdemySelectWrapper } from './styled';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import Search from 'antd/es/input/Search';
interface IProps {
  children?: ReactNode;
}
const aplication = [
  {
    _id: nanoid(),
    name: '全部'
  },
  {
    _id: nanoid(),
    name: '国际幼儿班'
  },
  {
    _id: nanoid(),
    name: '国际小学'
  },
  {
    _id: nanoid(),
    name: '国际初中'
  },

  {
    _id: nanoid(),
    name: '国际高中'
  },
  {
    _id: nanoid(),
    name: '大学预科'
  },
  {
    _id: nanoid(),
    name: '学前'
  }
];
const course = [
  {
    _id: nanoid(),
    name: '全部'
  },
  {
    _id: nanoid(),
    name: 'A-Level课程'
  },
  {
    _id: nanoid(),
    name: 'AP课程'
  },
  {
    _id: nanoid(),
    name: '香港DSE课程'
  },
  {
    _id: nanoid(),
    name: 'OSSD课程'
  },
  {
    _id: nanoid(),
    name: '其余课程'
  }
];
const tuition = [
  {
    _id: nanoid(),
    name: '全部'
  },
  {
    _id: nanoid(),
    name: '5万以下'
  },
  {
    _id: nanoid(),
    name: '5万-10万'
  },
  {
    _id: nanoid(),
    name: '11万-15万'
  },
  {
    _id: nanoid(),
    name: '15万-20万'
  },
  {
    _id: nanoid(),
    name: '20万以上'
  }
];
const place = [
  {
    _id: nanoid(),
    name: '全部'
  },
  {
    _id: nanoid(),
    name: '南山区'
  },
  {
    _id: nanoid(),
    name: '福田区'
  },
  {
    _id: nanoid(),
    name: '罗湖区'
  },
  {
    _id: nanoid(),
    name: '宝安区'
  },
  {
    _id: nanoid(),
    name: '龙华区'
  },
  {
    _id: nanoid(),
    name: '光明区'
  },
  {
    _id: nanoid(),
    name: '盐田区'
  },
  {
    _id: nanoid(),
    name: '砰山区'
  },
  {
    _id: nanoid(),
    name: '大鹏区'
  }
];
const AcdemySelect: FC<IProps> = () => {
  const [activeId, setActiveId] = useState(0);
  const [courseId, setcourseId] = useState(0);
  const [tuitionId, settuitionId] = useState(0);
  const [placeId, setplaceId] = useState(0);

  return (
    <AcdemySelectWrapper>
      <div className="flex fiter-type  p-3 my-3 ml-2">
        <p className=" block text-base p-2 text-dark-50">招生对象:</p>
        <ul className="flex text-xs ">
          {aplication.map((item, index) => {
            return (
              <li
                key={item._id}
                className={classNames(
                  `leading-8 mx-1 cursor-pointer ${index === activeId ? 'active' : ''}`
                )}
                onClick={() => setActiveId(index)}
              >
                <span className="px-4 py-1 block h-full">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex fiter-type p-3 my-3 ml-2">
        <p className=" block text-base p-2 text-dark-50">课程体系:</p>
        <ul className="flex text-xs">
          {course.map((item, index) => {
            return (
              <li
                key={item._id}
                className={classNames(
                  `leading-8 mx-1 cursor-pointer ${index === courseId ? 'active' : ''}`
                )}
                onClick={() => setcourseId(index)}
              >
                <span className="px-4 py-1 block h-full">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex fiter-type p-3 my-3 ml-2">
        <p className=" block text-base p-2 text-dark-50">一年费用:</p>
        <ul className="flex text-xs">
          {tuition.map((item, index) => {
            return (
              <li
                key={item._id}
                className={classNames(`leading-8 mx-1 cursor-pointer`)}
                onClick={() => settuitionId(index)}
              >
                <span
                  className={classNames(
                    `px-4 py-1 block h-full ${index === tuitionId ? 'active' : ''}`
                  )}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-wrap fiter-type p-3 my-3 ml-2">
        <p className=" block text-base p-2 text-dark-50">学校位置:</p>
        <ul className="flex text-xs">
          {place.map((item, index) => {
            return (
              <li
                key={item._id}
                className={classNames(`leading-8 mx-1 cursor-pointer`)}
                onClick={() => setplaceId(index)}
              >
                <span
                  className={classNames(
                    `px-4 py-1 block h-full ${index === placeId ? 'active' : ''}`
                  )}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex my-4">
        <div className="flex-1"></div>
        <div className="w-[30%] py-2 mb-2 mr-1">
          <Search
            placeholder="请输入学校名称搜索"
            className="btn"
            enterButton="搜索"
            size="large"
          />
        </div>
      </div>
    </AcdemySelectWrapper>
  );
};
export default AcdemySelect;
