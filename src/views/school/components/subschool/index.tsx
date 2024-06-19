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

  const changeNav = () => {
    nav('/school/1');
  };

  return (
    <SubChoolWrapper>
      {schoolInfo?.map((item) => {
        return (
          <div key={item._id} className="w-[24%] m-1 bg-white cread" onClick={() => changeNav()}>
            <img src={item.image_url} alt="" className="w-full ml-1" />
            <div className="item">
              <span>{item.schoolname}</span>
              <div>
                <div className="m-1">
                  招生对象：{' '}
                  {item.recruit.map((list: any) => {
                    // eslint-disable-next-line react/jsx-key
                    return <Tag color="magenta">{list}</Tag>;
                  })}
                </div>
                <div className="p-1">
                  课程体系:
                  <Tag color="#55acee" className="ml-1">
                    {item.course}
                  </Tag>
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
