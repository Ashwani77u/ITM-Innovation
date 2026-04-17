import React, { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const projects = [
    { name: "Manavrahit Folding Naav", img: "ph1.jpg.jpeg" },
    { name: "AI Animal Camera", img: "Ph2.jpeg" },
    { name: "Digital Locker", img: "ph4.jpeg" },
    { name: "Anti Pollution Divider", img: "ph3.jpeg" },
    { name: "Defence Hand Gloves", img: "ph5.jpeg" },
  ];

  return (
    <div>
      {/* Moving Background */}
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

        <button className="join-btn" onClick={() => setShowForm(true)}>
          Join Us
        </button>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Innovation Cell</h2>

        <div className="info-row">
          <div className="orange-box">
            <p>
              Innovation Cell is a creative hub for students where ideas are
              transformed into real projects.
            </p>

            <p>
              Students get mentorship, technical guidance and hands-on experience
              using advanced tools in the IoT Lab.
            </p>

            <p>
              Our mission is to inspire innovators and prepare students for future opportunities.
            </p>
          </div>

          <div className="side-image">
            <img src="ph6.jpeg" alt="About" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="section">
        <h2>Why Join Us?</h2>

        <div className="info-row">
          <div className="orange-box">
            <p>✔ Learn coding, IoT, robotics and new technologies.</p>
            <p>✔ Build innovative projects.</p>
            <p>✔ Work with mentors and seniors.</p>
            <p>✔ Improve confidence and leadership.</p>
            <p>✔ Access modern IoT Lab.</p>
          </div>

          <div className="side-image">
            <img src="ph7.jpeg" alt="Benefits" />
          </div>
        </div>
      </section>

      {/* Projects */}
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
        <p>Connect with us and build something amazing.</p>

        <button className="join-btn" onClick={() => setShowForm(true)}>
          Join Us
        </button>

        <p className="credit">
          Website Developed By <strong>ZyphoraTech</strong>
        </p>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className="popup">
          <div className="popup-box">
            <h2>Join Innovation Cell</h2>

            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Course / Branch" required />
              <input type="text" placeholder="Year" required />
              <input type="text" placeholder="Skills" />
              <textarea placeholder="Your Idea"></textarea>

              <button type="submit" className="join-btn">
                Submit
              </button>

              <button
                type="button"
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;