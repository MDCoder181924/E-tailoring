import React, { useEffect, useState } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login status

  useEffect(() => {
    // Intro Animation Logic
    const timer = setTimeout(() => {
      document.body.classList.add("show-main");
      document.body.classList.remove("intro");
      document.documentElement.classList.add("show-main");
      document.documentElement.classList.remove("intro");
      window.scrollTo(0, 0);
    }, 1200);

    // Initial class setup
    document.documentElement.classList.add("intro");
    document.body.classList.add("intro");

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll Reset on Mount
    window.scrollTo(0, 0);

    // Intersection Observer for Reveal
    const revealTargets = document.querySelectorAll(".hero, .section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));

    // Header Scroll Effect
    const header = document.querySelector(".site-header");
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      revealTargets.forEach((target) => observer.unobserve(target));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Please Login or Sign Up first.");
    } else {
      console.log("Search initiated");
    }
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <>
      <div className="intro-screen">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="intro-title" aria-live="polite">E-TAILORING</div>
      </div>

      <header className="site-header">
        <div className="brand-block">
          <div className="brand">E-Tailoring</div>
        </div>
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#customers">Customers</a>
          <a href="#tailors">For Tailors</a>
          <a href="#gallery">Design Feed</a>
          <Link className="login-btn" to="/auth">
            <span className="btn-text">Login / Sign Up</span>
            <div className="particles">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <section id="home" className="hero centered-hero">
          <div className="hero-content">
            <h1 className="hero-title">Experience the Art<br />of <span className="gradient-text"
              style={{ background: 'linear-gradient(120deg, #D4AF37, #F8F8F8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Custom
              Fit</span></h1>
            <p className="hero-subtitle">
              The ultimate platform connecting discerning customers with master tailors.
              Premium stitching, doorstep delivery, and an exclusive online showcase.
            </p>

            <div className="hero-search-wrapper">
              <div className="search-bar">
                <span className="search-icon">⚲</span>
                <input type="text" placeholder="Search by City, Tailor, or Style..." onKeyDown={handleSearchEnter} />
                <button className="btn primary" onClick={handleSearch}>Discover</button>
              </div>
            </div>

            <div className="hero-actions-row">
              <a href="#customers" className="action-link">For Customers <span className="arrow">→</span></a>
              <a href="#tailors" className="action-link">For Tailors <span className="arrow">→</span></a>
            </div>
          </div>
        </section>

        <section id="customers" className="section">
          <h2>For Our Customers</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '600px', margin: '-10px auto 40px' }}>
            Explore a world of fashion. Order custom designs or find the perfect tailor near you.
          </p>
          <div className="grid">
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Tailor Profiles</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>View detailed profiles, ratings, and specialties of top
                tailors in your city.</p>
            </div>
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Style Feed</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Browse an Instagram-style feed of latest trends and designs
                posted by tailors.</p>
            </div>
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Custom Orders</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Upload your fabric or choose from ours. We handle the pickup
                and stitching.</p>
            </div>
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Home Delivery</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Get your perfectly fitted clothes delivered safely to your
                doorstep.</p>
            </div>
          </div>
        </section>

        <section id="tailors" className="section" style={{ borderTop: '1px solid var(--line)' }}>
          <h2>For Master Tailors</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '600px', margin: '-10px auto 40px' }}>
            Grow your business. Showcase your craft to thousands of premium clients.
          </p>
          <div className="grid">
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Online Shop</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Create your digital storefront. Manage services, pricing,
                and availability.</p>
            </div>
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Visual Portfolio</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Upload photos & videos of your work. Create a stunning
                portfolio.</p>
            </div>
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Order Management</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Track orders, measurements, and deadlines in one simple
                dashboard.</p>
            </div>
            <div className="panel">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Direct Reach</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Connect directly with customers looking for your specific
                skills.</p>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <h2>Trending Designs</h2>
          <div className="feed-grid">
            <div className="feed-item">
              <div className="feed-placeholder"></div>
            </div>
            <div className="feed-item">
              <div className="feed-placeholder"></div>
            </div>
            <div className="feed-item">
              <div className="feed-placeholder"></div>
            </div>
            <div className="feed-item">
              <div className="feed-placeholder"></div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button className="btn primary">View Full Gallery</button>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact & Support</h2>
          <div className="contact-card">
            <p style={{ color: 'var(--muted)' }}>Need assistance or have a question?</p>
            <p className="contact-line">dobariyam7193@gmail.com</p>
            <p className="contact-line">+91 0000000000</p>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">E-Tailoring</div>
            <p>
              The premier destination for custom tailoring and fashion design.
              Connecting artistry with convenience.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#customers">Find Tailors</a>
            <a href="#gallery">Browse Designs</a>
            <a href="#tailors">Join as Tailor</a>
            <Link to="/auth">Login</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Custom Stitching</a>
            <a href="#">Alterations</a>
            <a href="#">Bridal & Suits</a>
            <a href="#">Fabric Sourcing</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact">
              <span className="dot"></span>
              <span>support@e-tailoring.com</span>
            </div>
            <div className="footer-contact">
              <span className="dot"></span>
              <span>Vadodara, India</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 E-Tailoring Services. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Home;
