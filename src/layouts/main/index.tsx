import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { useRoutes } from 'react-router-dom';
import routes from '../../router';
import type { ReactNode, FC } from 'react';
interface IProps {
  children?: ReactNode;
}
const { Content } = Layout;
const MainLayout: FC<IProps> = () => {
  return (
    <Content>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </Content>
  );
};
export default MainLayout;
