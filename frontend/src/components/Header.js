import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const cartItems = props.cartItems;
  return (
    <div>
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Im a John
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart
            {cartItems > 0 && (
              <span className="badge">{cartItems}</span>
            )}
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
    </div>
  );
}
