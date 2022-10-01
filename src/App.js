import Header from "./Header";
import Packages from "./Packages";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function scrollToSection(id) {
  if (id === "Pricing") id = "Packages";
  if (id === "Home") id = "Header";
  let section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <Packages />
      <About />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
