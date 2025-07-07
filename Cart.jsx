import React, { useEffect, useState } from 'react';
import '../assets/styles/Cart.css'; 

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
  }, []);

  const remove = (product) => {
    const updatedItems = items.filter(item => item.id !== product.id);
    setItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));

  };

  const total = items.reduce((sum, item) => sum + Number(item.price * 80), 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {items.map(p => (
            <div key={p.id} className="item">
              <h3>{p.title}</h3>
              <p>₹{p.price * 80}</p>
              <button className="button" onClick={() => remove(p)}>Delete</button>
            </div>
          ))}
          <div className="total">Total: ₹{total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}
