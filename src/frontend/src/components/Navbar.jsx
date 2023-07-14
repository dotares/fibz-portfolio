export default function Navbar() {
  return (
    <div className="navbar-section">
      <div>
        <a className="brand-logo" href="#">
          brand
        </a>
      </div>
      <div>
        <a className="about-link" href="#about">
          about
        </a>
        <a className="projects-link" href="#projects">
          projects
        </a>
      </div>
    </div>
  );
}
