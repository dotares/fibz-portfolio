export default function Navbar() {
  return (
    <div className="navbar-section border-b-2 border-zinc-100 font-jetbrainsmono flex sm:px-32 sm:py-6 px-6 py-4 place-content-between items-center sticky top-0 backdrop-blur-xl bg-black mix-blend-difference">
      {" "}
      <div>
        <a className="brand-logo" href="#">
          <span className="text-white text-lg sm:text-2xl font-bold">
            Fibbonachos.
          </span>
        </a>
      </div>
      <div className="space-x-4 text-md sm:text-xl sm:space-x-8">
        <a className="about-link text-white" href="#about">
          About
        </a>
        <a className="projects-link text-zinc-100" href="#projects">
          Projects
        </a>
      </div>
    </div>
  );
}
