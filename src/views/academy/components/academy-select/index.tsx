import React, { useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { AcdemySelectWrapper } from './styled';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { useAppDispatch } from '../../../../store';
import { fetchAcademylistAction } from '../../store/academy';
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
    name: '幼儿园'
  },
  {
    _id: nanoid(),
    name: '小学'
  },
  {
    _id: nanoid(),
    name: '初中'
  },

  {
    _id: nanoid(),
    name: '高中'
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
    name: 'DSE课程'
  },
  {
    _id: nanoid(),
    name: 'AP课程'
  },
  {
    _id: nanoid(),
    name: 'IB课程'
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
  }
];
const AcdemySelect: FC<IProps> = () => {
  const dispach = useAppDispatch();
  const [activeId, setActiveId] = useState(0);
  const [courseId, setcourseId] = useState(0);
  const [placeId, setplaceId] = useState(0);
  const [searchinfo, setSearchinfo] = useState({
    objectInfo: '',
    course: '',
    address: ''
  });

  const handleCourse = (index: number, course: string) => {
    if (course) {
      setSearchinfo((prevParams) => ({
        ...prevParams,
        course
      }));
    }
    if (course === '全部') {
      setSearchinfo((prevParams) => ({
        ...prevParams,
        course: ''
      }));
    }
    setcourseId(index);
  };

  const handleAplicaction = (index: number, objectInfo: string) => {
    if (objectInfo) {
      setSearchinfo((prevParams) => ({
        ...prevParams,
        objectInfo
      }));
    }
    if (objectInfo === '全部') {
      setSearchinfo((prevParams) => ({
        ...prevParams,
        objectInfo: ''
      }));
    }

    setActiveId(index);
  };
  const handlePlace = (index: number, address: string) => {
    setplaceId(index);
    setSearchinfo((prevParams) => ({
      ...prevParams,
      address
    }));
    if (address === '全部') {
      setSearchinfo((prevParams) => ({
        ...prevParams,
        address: ''
      }));
    }
  };
  useEffect(() => {
    dispach(fetchAcademylistAction(searchinfo));
  }, [searchinfo]);
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
                onClick={() => handleAplicaction(index, item.name)}
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
                onClick={() => handleCourse(index, item.name)}
              >
                <span className="px-4 py-1 block h-full">{item.name}</span>
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
                onClick={() => handlePlace(index, item.name)}
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
    </AcdemySelectWrapper>
  );
};
export default AcdemySelect;
