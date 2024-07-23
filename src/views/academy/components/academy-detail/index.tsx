import React from 'react';
import type { ReactNode, FC } from 'react';
import { AcademyDetailWrapper } from './styled';
import { Button, Pagination, Tag } from 'antd';
import { useAppSelector } from '../../../../store';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}
const AcademyDetail: FC<IProps> = () => {
  const nav = useNavigate();
  const { academList } = useAppSelector(
    (state) => ({ academList: state.academlist.academlist }),
    shallowEqual
  );
  const onclick = (id: number) => {
    nav(`/school/${id}`);
  };
  return (
    <AcademyDetailWrapper>
      <div>
        <h1 className="text-2xl text-center font-bold py-9 text">国际学校大全</h1>
      </div>
      {academList &&
        academList.slice(0, 10).map((item) => {
          return (
            <div key={item.name} className="flex item">
              <div className="my-3 flex justify-center items-center">
                <img src={item.school_icon} alt="" className="w-[220px] p-1" />
              </div>
              <div className="flex-1 my-3">
                <h1 className=" text-xl font-bold py-2">{item.name}</h1>
                <div className="my-3">
                  <span className="mr-2">招生对象:</span>
                  {item.object_info.map((item: string, index: number) => {
                    return (
                      <Tag color="#87d068" key={index}>
                        {item}
                      </Tag>
                    );
                  })}
                </div>
                <div>
                  <span>课程体系：</span>
                  {item.course.map((items: string, index: number) => {
                    return (
                      <Tag color="#55acee" key={index}>
                        {items}
                      </Tag>
                    );
                  })}
                </div>
                <div className="flex-1 my-3 h-[25px] overflow-clip">
                  <span>学校介绍：</span>
                  <span>{item.introduce}</span>
                </div>
              </div>
              <div className="w-[100px] flex justify-center items-center my-3">
                <Button
                  style={{ backgroundColor: '#0973a3', color: 'white', height: '35px' }}
                  onClick={() => onclick(item.id)}
                >
                  查看学校
                </Button>
              </div>
            </div>
          );
        })}
      <div className="flex justify-center py-5">
        <Pagination defaultCurrent={0} total={academList.length} />
      </div>
    </AcademyDetailWrapper>
  );
};
export default AcademyDetail;
