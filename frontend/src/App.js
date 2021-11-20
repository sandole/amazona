import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from './screens/CartScreen';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header/>
        <main>
          <Routes>
            <Route path="/cart/:id?" component={<CartScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
