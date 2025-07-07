import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/styles/Home.css';

export default function Home() {
  const navigate = useNavigate(); 

  return (
    <>
      <div className="home">
        <header className="hero">
          <h1>Welcome to ShopSmart</h1>
          <p>Your one-stop destination for smart shopping.</p>
          <button onClick={() => navigate('/products')}>
            Browse Products
          </button>
        </header>

        <section className="features">
          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered within 24 hours.</p>
          </div>
          <div className="feature">
            <h3>Top Quality</h3>
            <p>We only sell handpicked, high-quality products.</p>
          </div>
          <div className="feature">
            <h3>Secure Payment</h3>
            <p>Multiple secure payment options to choose from.</p>
          </div>
        </section>
      </div>
    </>
  );
}
