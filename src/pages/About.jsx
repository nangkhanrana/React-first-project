import React from 'react'
import Navbar from '../components/navbar'

// pages/About.jsx
import "./About.css";

function About() {
  return (
    <><Navbar />
    <div className="about-container">
      <h1>About Swift Academy</h1>
      <p>
        Swift Academy is a modern learning platform focused on delivering quality blogs,
        tutorials, and educational resources to help students and learners excel.
      </p>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make knowledge accessible to everyone by offering
          simplified content, research-based insights, and easy-to-understand guides.
        </p>
      </section>
    </div>
    </>
  );
}

export default About;
