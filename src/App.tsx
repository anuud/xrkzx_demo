import React from 'react';
import Home from './views/home';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button type="primary">Button</Button>
          <Home />
        </a>
      </header>
    </div>
  );
}

export default App;
