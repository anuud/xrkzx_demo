import React, { useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import SunflowerTitle from '../sunflower-title';
import { SunflowerSchoolwrapper } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { shallowEqual } from 'react-redux';
import { fetchHomeDataAction } from '../../../home/store/home';
interface IProps {
  children?: ReactNode;
}
const SunflowerSchool: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { schoollist } = useAppSelector(
    (state) => ({
      schoollist: state.homelist.schoollist
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, []);
  return (
    <SunflowerSchoolwrapper>
      <SunflowerTitle title="热门国际学校" />
      <div className="flex flex-wrap w-[80%] m-auto">
        {schoollist?.slice(0, 10).map((item) => {
          return (
            <div key={item.id} className=" py-4 w-[19.3%] bg-white m-1">
              <img src={item.school_icon} alt="" className="w-[390px] h-[178px] p-1" />
              <div className="ml-3 text-black text-sm font-bold text-center h-[40px] ">
                {item.name}
              </div>
              <div className="p-1">
                招生阶段：
                {item?.object_info.map((item: any) => {
                  return <span key={item}>{item}</span>;
                })}
              </div>
              <div className="p-1">
                开设课程：
                {item?.course.slice(0, 3).map((item: any) => {
                  return (
                    <span key={item} className="ml-2">
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SunflowerSchoolwrapper>
  );
};
export default SunflowerSchool;
