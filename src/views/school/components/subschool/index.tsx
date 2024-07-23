import React from 'react';
import type { ReactNode, FC } from 'react';
import { SubChoolWrapper } from './styled';
import { Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
  schoolInfo: any[];
}
const SubSchool: FC<IProps> = (props) => {
  const { schoolInfo } = props;
  const nav = useNavigate();
  const changeNav = (id: number) => {
    nav(`/school/${id}`);
  };

  return (
    <SubChoolWrapper>
      {schoolInfo &&
        schoolInfo?.slice(0, 8).map((item) => {
          return (
            <div
              key={item.name}
              className="w-[24%] m-1 bg-white cread"
              onClick={() => changeNav(item.id)}
            >
              <div>
                <img src={item.school_icon} alt="" className="w-[97%] ml-1 h-[180px]" />
              </div>
              <div className="item">
                <div className="h-[25px] overflow-hidden text-center">
                  <span>{item.name}</span>
                </div>
                <div>
                  <div className="m-1 h-[44px]">
                    招生对象：{' '}
                    {item.object_info.map((list: any) => {
                      // eslint-disable-next-line react/jsx-key
                      return (
                        <Tag color="magenta" key={list}>
                          {list}
                        </Tag>
                      );
                    })}
                  </div>
                  <div className="p-1 mb-2 h-[25px] overflow-hidden">
                    课程体系:
                    {item.course.map((item: any) => {
                      return (
                        <Tag color="#55acee" className="ml-1" key={item}>
                          {item}
                        </Tag>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </SubChoolWrapper>
  );
};
export default SubSchool;
