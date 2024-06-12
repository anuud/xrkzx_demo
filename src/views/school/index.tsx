import React from 'react';
import type { ReactNode, FC } from 'react';
import { SchoolWrapper } from './styled';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const School: FC<IProps> = () => {
  return (
    <SchoolWrapper>
      <div className="school-top">
        <div className="school_search">
          <h5>INTERNATIONAL SCHOOL</h5>
          <h4>国际学校</h4>
          <div className="mt-7">
            <Input placeholder="请输入您想查询的学校名称" style={{ width: '280px' }} size="large" />
            <Button
              type="dashed"
              shape="circle"
              size="large"
              style={{ backgroundColor: '#156240 ', marginLeft: '20px' }}
              icon={<SearchOutlined />}
            />
          </div>
        </div>
      </div>
    </SchoolWrapper>
  );
};
export default School;
