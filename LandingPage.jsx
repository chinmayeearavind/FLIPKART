import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/LandingPage.css';

const LandingPage = () => {
  const form = useRef();
  const nav = useNavigate();
  const handle = e => {
    e.preventDefault();
    const [email, pswd] = form.current;
    if (email.value === 'admin@gmail.com' && pswd.value === 'admin123') {
      nav('/home');
    } else {
      email.style.border = pswd.style.border = '2px solid red';
    }
  };

  return (
    <>
    <div className="landingpage">
      <div className="container">
        <form ref={form} onSubmit={handle}>
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default LandingPage;
