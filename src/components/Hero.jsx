import heroImage from "../assets/Fibbonachos-HERO.png";

export default function Hero() {
  return (
    <div
      id="hero-section-id"
      className="hero-section h-full sm:px-0 px-5 flex flex-col place-items-center"
    >
      <div>
        <img
          src={heroImage}
          alt="Hero Image"
          className="rounded-full shadow-xl mb-8 shadow-zinc-950 h-40 sm:h-52"
        />
      </div>
      <h1 className="primary-header text-center text-2xl sm:text-5xl font-jetbrainsmono mb-4">
        Hi, I'm <span className="text-zinc-100 font-bold">Arish </span>aka
        Fibz👋
      </h1>
      <h3 className="secondary-header font-jetbrainsmono text-center text-lg sm:text-2xl">
        Building digital products and experiences.
      </h3>
    </div>
  );
}
