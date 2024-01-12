import React, { useEffect } from 'react';
import './styles/Navbar.css';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   const wow = new WOW.WOW({
  //     animateClass: 'animated',
  //     offset: 0,
  //   });
  //   wow.init();
  // }, []);
  useEffect(() => {
    // Your React logic here
    const handleNavToggle = () => {
      const nav = document.querySelector(".nav");
      const hamBurger = document.querySelector(".ham-burger");

      nav.classList.toggle("open");
      hamBurger.classList.toggle("active");
    };

    const handleAccordion = (event) => {
      const accordianContainers = document.querySelectorAll(".accordian-container");

      accordianContainers.forEach((container) => {
        const body = container.querySelector(".body");
        const headSpan = container.querySelector(".head span");

        body.style.display = 'none';
        container.classList.remove("active");
        headSpan.classList.remove("fa-angle-down");
        headSpan.classList.add("fa-angle-up");
      });

      const body = event.currentTarget.querySelector(".body");
      const headSpan = event.currentTarget.querySelector(".head span");

      body.style.display = 'block';
      event.currentTarget.classList.add("active");
      headSpan.classList.remove("fa-angle-up");
      headSpan.classList.add("fa-angle-down");
    };

    const handleScroll = (event) => {
      if (event.currentTarget.hash !== "") {
        event.preventDefault();
        const hash = event.currentTarget.hash;

        document.documentElement.scrollTo({
          top: document.querySelector(hash).offsetTop,
          behavior: 'smooth'
        });

        // add active class in navigation
        document.querySelectorAll(".nav ul li a").forEach(link => link.classList.remove("active"));
        event.currentTarget.classList.add("active");
      }
    };

    document.querySelector(".ham-burger, .nav ul li a").addEventListener("click", handleNavToggle);
    document.querySelectorAll(".accordian-container").forEach(container => container.addEventListener("click", handleAccordion));
    document.querySelectorAll(".nav ul li a, .go-down").forEach(link => link.addEventListener("click", handleScroll));

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelector(".ham-burger, .nav ul li a").removeEventListener("click", handleNavToggle);
      document.querySelectorAll(".accordian-container").forEach(container => container.removeEventListener("click", handleAccordion));
      document.querySelectorAll(".nav ul li a, .go-down").forEach(link => link.removeEventListener("click", handleScroll));
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">Shop<span>Lyft</span></Link>
          </div>
          <Link to="javascript:void(0)" className="ham-burger">
            <span></span>
            <span></span>
          </Link>
          <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/auth">Sign up</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/cart">Carts</Link></li>
              <li><Link to="/orders">Order</Link></li>
            </ul>
          </div>
        </div>
      </header>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </div>
  );
}

export default App;