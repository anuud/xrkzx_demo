import React, { Suspense } from 'react';
import AppHeader from './components/app-header';
import { useRoutes } from 'react-router-dom';
import routes from './router';
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
