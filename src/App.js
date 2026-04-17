import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      name: "Manavrahit Folding Naav",
      img: "ph1.jpg.jpeg",
    },
    {
      name: "AI Animal Camera",
      img: "Ph2.jpeg",
    },
    {
      name: "Digital Locker",
      img: "ph4.jpeg",
    },
    {
      name: "Anti Pollution Divider",
      img: "ph3.jpeg",
    },
    {
      name: "Defence Hand Gloves",
      img: "ph5.jpeg",
    },
  ];

  return (
    <div>
      {/* Moving Background Particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="brand">
          <img src="itmlogo.jpeg" alt="Logo" className="nav-logo" />
          <h1>ITM Innovation Cell</h1>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#benefits">Benefits</a>
          <a href="#topprojects">Top Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>Turn Your Ideas Into Reality 🚀</h2>

        <p>
          Innovation Cell is a platform where students build real-world
          projects, learn technologies and showcase their innovation in our IoT Lab.
        </p>

        <a
          href="https://wa.me/916393971945?text=Hello%20I%20want%20to%20join%20Innovation%20Cell"
          target="_blank"
          rel="noreferrer"
        >
          <button className="join-btn">Join Us</button>
        </a>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Innovation Cell</h2>

        <div className="info-row">
          <div className="orange-box">
            <p>
              Innovation Cell is a creative hub for students where ideas are
              transformed into real projects. Students get mentorship,
              technical guidance and hands-on experience using advanced tools
              in the IoT Lab.
            </p>

            <p>
              Our mission is to inspire young innovators, develop
              problem-solving skills and prepare students for future
              technology opportunities.
            </p>
          </div>

          <div className="side-image">
            <img src="ph6.jpeg" alt="About Innovation Cell" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="section">
        <h2>Why Join Us?</h2>

        <div className="info-row">
          <div className="orange-box">
            <p>✔ Learn coding, IoT, robotics and new technologies.</p>
            <p>✔ Build innovative projects for exhibitions and competitions.</p>
            <p>✔ Work with mentors and experienced seniors.</p>
            <p>✔ Improve teamwork, confidence and leadership skills.</p>
            <p>✔ Get access to our modern IoT Lab resources.</p>
          </div>

          <div className="side-image">
            <img src="ph7.jpeg" alt="Why Join Innovation Cell" />
          </div>
        </div>
      </section>

      {/* Top Projects */}
      <section id="topprojects" className="section">
        <h2>Top Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.name} />
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section id="contact" className="footer">
        <h2>Join Innovation Cell Today</h2>
        <p>Connect with us on WhatsApp now.</p>

        <a
          href="https://wa.me/916393971945?text=Hello%20I%20want%20to%20join%20Innovation%20Cell"
          target="_blank"
          rel="noreferrer"
        >
          <button className="join-btn">Join Us</button>
        </a>

        <p className="credit">
          Website Developed By <strong>ZyphoraTech</strong>
        </p>
      </section>
    </div>
  );
}

export default App; 