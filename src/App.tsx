import React from 'react';
// import components
import Header from './components/Header/Header';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/Other/BackToTopBtn';
import NavigationList from './components/Other/NavigationList';
import { ToastContainer } from 'react-toastify';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Compare from './pages/Compare';
import Wishlist from './pages/Wishlist';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
// import react-router
import { BrowserRouter, Route } from "react-router-dom";
// import store
import store from './redux/store/store';
// import Provider
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/product-details/:id" component={ProductDetails} />
            <Subscribe />
          </main>

          <footer>
            <Footer />
          </footer>

          <BackToTopBtn />
          <NavigationList />
          <ToastContainer position="bottom-left" autoClose={4000} closeOnClick />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;