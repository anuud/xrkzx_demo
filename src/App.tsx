import React from 'react';
import AppFooter from './components/app-footer';
import { Layout } from 'antd';
import HeaderLayout from './layouts/header';
import MainLayout from './layouts/main';
function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderLayout />
        <MainLayout />
        <AppFooter />
      </Layout>
    </div>
  );
}
export default App;
