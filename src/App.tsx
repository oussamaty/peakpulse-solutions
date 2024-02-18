import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhoneModel from './components/PhoneModel';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main-content">
        <section id="landing-section" className="landing-section">
          <div className="landing-left">
            <h1>Welcome to Kine</h1>
            <p>
              Your trusted partner for innovative software solutions. Kine
              provides SaaS solutions for coaches and nutrition influencers,
              specializing in custom apps tailored to meet your needs.
            </p>
            <button>
              Get Started
            </button>
          </div>
          <div className="landing-right">
            <PhoneModel />
          </div>
        </section>
        <section id="about-section" className="about-section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              Kine is a leading software solutions agency dedicated to
              providing SaaS solutions for coaches and nutrition influencers.
              We specialize in developing cutting-edge apps tailored to meet
              the unique needs of our clients.
            </p>
          </div>
        </section>
        <section id="services-section" className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="service-cards">
              <div className="service-card">
                <h3>Custom Coaching Apps</h3>
                <p>
                  We design and develop personalized coaching apps equipped
                  with advanced features to enhance your coaching experience.
                </p>
              </div>
              <div className="service-card">
                <h3>Nutrition Influencer Solutions</h3>
                <p>
                  Our specialized solutions for nutrition influencers include
                  powerful tools to manage clients, track progress, and deliver
                  engaging content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact-section" className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Get in touch with us today to learn more about our services and how
              we can help you achieve your goals.
            </p>
            {/* Add contact form or contact information */}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
