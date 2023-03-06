import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import InfoRestaurant from "./components/InfoRestaurant";
import Hero from "./components/Hero";
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { getProducts } from './firebase/firebase';

import { DarkModeProvider } from './context/darkModeContext';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <DarkModeProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="site-header section">
              <InfoRestaurant />
              <Hero />
              <Navbar />
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="item-list-container section">
                    <ItemListContainer />
                  </div>
                }
              />
              <Route
                path='item/:id'
                element={
                  <div className="item-detail-container section">
                    <ItemDetailContainer />
                  </div>
                }
              />
              <Route
                path='category/:idCat'
                element={
                  <div className="item-list-container section">
                    <ItemListContainer />
                  </div>
                }
              />
              <Route
                path="/checkout"
                element={
                  <div className='checkout-form-container section'>
                    <Checkout />
                  </div>
                }
              />
              <Route
                path="/cart"
                element={
                  <div className='cart-container section'>
                    <Cart />
                  </div>
                }
              />
            </Routes>
            <div className="footer-container section">
              <Footer />
            </div>
            <ToastContainer
              autoClose={3000}
              newestOnTop
              theme="colored"
            />
          </BrowserRouter>
        </CartProvider>
      </DarkModeProvider>
    </>
  )
}

export default App;