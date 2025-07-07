import React, { useEffect, useState } from 'react';
import '../assets/styles/Products.css'

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const r = await fetch('http://localhost:4000/products');
      setProducts(await r.json());
    })();
  }, []);

  const add = p => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.some(x => x.id === p.id)) return alert('Already added');
    cart.push(p);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <>
    <div className="products">
      {products.map(p => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p className="price">₹{p.price*80}</p>
          <p className="description">{p.description.slice(0,80)}...</p>
          <button className="button" onClick={() => add(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
    
  );
}
