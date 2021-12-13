import { useContext } from "react";
import About from "./components/About/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/Skills";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;