import heroImage from "../assets/Fibbonachos-HERO.png";

export default function Hero() {
  return (
    <>
      <div className="hero-section flex items-center p-8">
        <div>
          <h1 className="primary-header">
            Hi, I'm Fibz aka Arish, and I'm a REAL full-stack developer.
          </h1>
          <h3 className="tertiary-header">
            Let's cut the crap and build something great together
          </h3>
        </div>
        <div>
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </>
  );
}
