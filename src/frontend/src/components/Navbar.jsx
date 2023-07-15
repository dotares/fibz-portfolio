export default function Navbar() {
  return (
    <div className="navbar-section text-xl flex p-8 place-content-between">
      <a className="brand-logo" href="#">
        brand
      </a>
      <div className="space-x-8">
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
