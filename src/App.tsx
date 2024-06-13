import React from 'react';
import AppFooter from './components/app-footer';
import { Layout } from 'antd';
import HeaderLayout from './layouts/header';
import MainLayout from './layouts/main';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="App">
      <Layout>
        {location.pathname == '/signup' ? '' : <HeaderLayout />}
        {/* <HeaderLayout /> */}
        <MainLayout />
        {location.pathname == '/signup' ? '' : <AppFooter />}
      </Layout>
    </div>
  );
}
export default App;
