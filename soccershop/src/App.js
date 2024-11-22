import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // AOS 초기화
  useEffect(() => {
    Aos.init({ duration: 1000 }); // 애니메이션 지속시간 설정
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">My Shop</div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="banner" data-aos="fade-up">
        <div className="banner-content">
          <h1>Welcome to My Shop</h1>
          <p>Best deals for you, only at My Shop</p>
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title" data-aos="fade-up">
          Featured Products
        </h2>
        <div className="products" data-aos="fade-up">
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product" />
            <h3>Product 1</h3>
            <p>$99.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product" />
            <h3>Product 2</h3>
            <p>$79.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product" />
            <h3>Product 3</h3>
            <p>$149.99</p>
          </div>
        </div>
      </section>

      <section className="about-section" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          We are a modern shopping destination offering the latest and greatest
          products for every need. Enjoy your shopping experience with us!
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 My Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
