import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
