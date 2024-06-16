import React from 'react';
import type { ReactNode, FC } from 'react';
import { AcademyDetailWrapper } from './styled';
import { strategy_school } from '../../../../assets/data/strategy_school';
import { Button, Pagination, Tag } from 'antd';
interface IProps {
  children?: ReactNode;
}
const AcademyDetail: FC<IProps> = () => {
  return (
    <AcademyDetailWrapper>
      <div>
        <h1 className="text-2xl text-center font-bold py-9 text">国际学校大全_国际学校排名</h1>
      </div>
      {strategy_school[0].list.map((item) => {
        return (
          <div key={item._id} className="flex item">
            <div className="my-3">
              <img src={item.image_url} alt="" className="w-[220px] p-1" />
            </div>
            <div className="flex-1 my-3">
              <h1 className=" text-xl font-bold py-2">{item.schoolname}</h1>
              <div className="my-3">
                <span className="mr-2">招生对象:</span>
                {item.recruit.map((item, index) => {
                  return (
                    <Tag color="#87d068" key={index}>
                      {item}
                    </Tag>
                  );
                })}
              </div>
              <div>
                <span>课程体系：</span>
                <Tag color="#108ee9">{item.course}</Tag>
              </div>
              <div className="flex-1 my-3">
                <span>学校介绍：</span>
                <span>北京市朝阳区凯文学校成立...</span>
              </div>
            </div>
            <div className="w-[100px] flex justify-center items-center my-3">
              <Button style={{ backgroundColor: '#0973a3', color: 'white', height: '35px' }}>
                查看学校
              </Button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center py-5">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </AcademyDetailWrapper>
  );
};
export default AcademyDetail;
