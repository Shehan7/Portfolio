import { useContext } from "react";
import About from "./components/About/about";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import scrollTo from "gatsby-plugin-smoothscroll";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <button style={{position: 'fixed', right: '10px', bottom: '10px', width: 'auto'}} onClick={() => scrollTo("#intro")}>UP</button>
    </div>
  );
};

export default App;