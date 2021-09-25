import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
