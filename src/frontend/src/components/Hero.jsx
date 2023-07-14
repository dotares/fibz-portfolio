import heroImage from "../assets/Fibbonachos-HERO.png";

export default function Hero() {
  return (
    <div className="hero-section">
      <h1 className="primary-header">
        Hi, I'm Fibz aka Arish, and I'm a REAL full-stack developer.
      </h1>
      <h3 className="tertiary-header">
        Let's cut the crap and build something great together
      </h3>
      <img src={heroImage} alt="Hero Image" />
    </div>
  );
}
