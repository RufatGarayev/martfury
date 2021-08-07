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
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Compare from './pages/Compare';
import Wishlist from './pages/Wishlist';
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
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/compare" component={Compare} />
          <Route path="/wishlist" component={Wishlist} />
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