export default function Navbar() {
  // NOTE: added text white only for testing purposes
  // the flex is supposed to be intentional

  // TODO: Fix the tailwind config content

  return (
    <div className="navbar-section flex">
      <div>
        <a className="brand-logo text-white" href="#">
          brand
        </a>
      </div>
      <div>
        <a className="about-link" href="#about">
          about
        </a>
      </div>
      <div>
        <a className="projects-link" href="#projects">
          projects
        </a>
      </div>
    </div>
  );
}
