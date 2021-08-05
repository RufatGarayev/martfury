import React from 'react';
// components
import Header from './components/Header/Header';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/Other/BackToTopBtn';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
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
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Subscribe />
        </main>

        <footer>
          <Footer />
        </footer>

        <BackToTopBtn />
      </div>
    </BrowserRouter>
  );
}

export default App;