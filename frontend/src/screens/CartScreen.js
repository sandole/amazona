import React from 'react';
import { useLocation, useParams } from 'react-router';

export default function CartScreen() {
  const productId = useParams();
  const location = useLocation();
  const qty = location.search
    ? Number(location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId.id} Qty: {qty}
      </p>
    </div>
  );
}