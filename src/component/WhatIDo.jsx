import "../styles/WhatIDo.scss";

export default function WhatIDo() {
  return (
    <section className="what-i-do">
      <div className="container">
        <header className="section-header">
          <h2>What I Do</h2>
          <p>
            I combine engineering, design, and problem-solving to build modern
            digital products that are both functional and visually refined.
          </p>
        </header>

        <div className="services four">
          <div className="service-card">
            <span className="icon">💻</span>
            <h3>Web Development</h3>
            <p>
              I build fast, responsive, and scalable web applications using
              modern JavaScript frameworks.
            </p>
          </div>

          <div className="service-card">
            <span className="icon">🎨</span>
            <h3>Design with HTML & CSS</h3>
            <p>
              I create clean, responsive interfaces directly in HTML and CSS,
              focusing on layout, typography, and visual hierarchy.
            </p>
          </div>

          <div className="service-card">
            <span className="icon">🧭</span>
            <h3>Creative Direction</h3>
            <p>
              I ensure consistency between design, interaction, and technical
              execution across digital products.
            </p>
          </div>

          <div className="service-card">
            <span className="icon">🤖</span>
            <h3>Machine Learning (JavaScript)</h3>
            <p>
              I implement machine learning concepts from scratch using
              JavaScript, focusing on algorithms and system understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
