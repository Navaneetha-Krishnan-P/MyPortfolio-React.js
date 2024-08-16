import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import { AboutMe } from './sections/AboutMe/AboutMe';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { Education } from './sections/Education/Education';


function App() {
  return (
    <>
    <div>
      <Hero />
      <AboutMe />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
     
    </>
  );
}

export default App;
