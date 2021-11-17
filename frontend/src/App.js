import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen"
import HomeScreen from "./screens/Homescreen"

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
        </main>
        <footer className="row center">All rights reserved @ John Seong</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
