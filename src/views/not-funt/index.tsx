import React from 'react';
import type { ReactNode, FC } from 'react';
import { NotFuntWrapper } from './styled';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}
const NotFunt: FC<IProps> = () => {
  const navgite = useNavigate();
  return (
    <NotFuntWrapper>
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在."
        extra={
          <Button type="primary" onClick={() => navgite('/home')}>
            返回首页
          </Button>
        }
      />
    </NotFuntWrapper>
  );
};
export default NotFunt;
