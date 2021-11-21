import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { useLocation, useParams } from 'react-router';

export default function CartScreen() {
  const productId = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const qty = location.search
    ? Number(location.search.split('=')[1])
    : 1;
  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId.id} Qty: {qty}
      </p>
    </div>
  );
}