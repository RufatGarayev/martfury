import React from 'react';
// components
import Header from './components/Header/Header';
// pages
import Home from './pages/Home';
// react-router
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Route path="/" component={Home} exact />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;