// pages/Home.jsx
import "./Home.css";
import Navbar from "../components/navbar";
import React from "react";

function Home() {
  return (
    <><Navbar />
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Swift Academy</h1>
        <p>Your trusted source for learning, growth, and insightful blog content.</p>
        <button className="hero-btn">Explore Blogs</button>
      </section>

      <section className="latest-section">
        <h2>Latest Articles</h2>
        <p>Stay updated with fresh educational content crafted to help you succeed.</p>
      </section>
    </div>
    </>
  );
}

export default Home;
