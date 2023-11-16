import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
        <h1>Plan. Launch. Grow.</h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <div className="d-flex">
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            className="glightbox btn-watch-video"
          >
            <i className="bi bi-play-circle"></i>
            <span>Watch Video</span>
          </a>
        </div>
      </div>
    </section>
  );
}
