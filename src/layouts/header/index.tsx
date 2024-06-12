import React from 'react';
import { Layout } from 'antd';
import type { ReactNode, FC } from 'react';
import AppHeader from '../../components/app-header';
interface IProps {
  children?: ReactNode;
}
const { Header } = Layout;
const HeaderLayout: FC<IProps> = () => {
  return (
    <Header
      style={{
        height: '89px',
        backgroundColor: 'rgba(245,245,245)',
        position: 'sticky',
        top: 0,
        zIndex: '999'
      }}
    >
      <AppHeader />
    </Header>
  );
};
export default HeaderLayout;
