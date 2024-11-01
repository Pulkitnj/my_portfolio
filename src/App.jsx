import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Parallax from "./components/Parallax";
import Computer from "./components/Computer";
import { Projects } from "./components/Projects";


function App() {
  const [count, setCount] = useState(0);
  //Here fixed means seperate page for all pages with seperate h&w
  return (
    <div>
       
    <div className="overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900">
     
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className=" container h-full mx-auto px-8 flex flex-col">
        
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section> <Computer /> </section>
        <section><Parallax /></section>
        <section id="About"><About /></section>
        <Projects />
        <section id="Projects"> <Technologies /></section>
        <section id="Contact"><Contact /></section>
      </div>
    </div>
    </div>
  );
}

export default App;
