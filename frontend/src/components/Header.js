import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { signout } from '../actions/userActions'

export default function Header(props) {
  const cartItems = props.cartItems;
  const userInfo = props.userInfo;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
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

          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </header>
    </div>
  );
}
