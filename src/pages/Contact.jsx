import React from 'react'
import Navbar from '../components/navbar';

// pages/Contact.jsx
import "./Contact.css";

function Contact() {
  return (
    <><Navbar />
    <div className="contact-container">
      <h1>Contact Swift Academy</h1>
      <p>Have questions? We'd love to hear from you!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  );
}

export default Contact;

