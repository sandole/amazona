import React from "react";

export default function Header() {
  return (
    <div>
      <header className="row">
        <div>
          <a className="brand" href="/">
            Im a John
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
    </div>
  );
}
