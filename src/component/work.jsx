import "../styles/work.scss";

export default function Work() {
  return (
    <section className="featured-work">
      <div className="container">
        <header className="section-header">
          <h2>Featured Work</h2>
          <p>
            A selection of projects that showcase my approach to development,
            design, and problem-solving.
          </p>
        </header>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-media one"></div>
            <div className="project-content">
              <h3>codeVoltage Website</h3>
              <p>
                A responsive portfolio website that bridge the gap between web designer and developer
              </p>
              <ul className="tech">
                <li>React</li>
                <li>SCSS</li>
                <li>Framer Motion</li>
                <li>Mongodb</li>
                <li>Nodejs</li>
              </ul>
              <div className="actions">
                <a href="#">Live</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media two"></div>
            <div className="project-content">
              <h3>HTML & CSS Design System</h3>
              <p>
                A handcrafted UI system created using semantic HTML and modern
                CSS techniques without external frameworks.
              </p>
              <ul className="tech">
                <li>HTML</li>
                <li>CSS Grid</li>
                <li>Flexbox</li>
              </ul>
              <div className="actions">
                <a href="#">Live</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media three"></div>
            <div className="project-content">
              <h3>Machine Learning in JavaScript</h3>
              <p>
                An experimental project implementing machine learning
                algorithms from scratch in JavaScript with interactive
                visualizations.
              </p>
              <ul className="tech">
                <li>JavaScript</li>
                <li>Algorithms</li>
                <li>Data Visualization</li>
              </ul>
              <div className="actions">
                <a href="#">Demo</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}