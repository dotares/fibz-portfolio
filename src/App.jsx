import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Marquee from "./components/TechMarquee.jsx";

function App() {
  return (
    <div className="main-container flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
