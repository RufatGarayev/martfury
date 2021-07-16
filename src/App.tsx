import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;