import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProjectDetail from "./pages/ProjectDetails";
import "./App.css";

function Home() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <section id="profil" className="section">
          <Profile />
        </section>
        <section id="skills" className="section section--accent">
          <Skills />
        </section>
        <section id="experiences" className="section">
          <Experiences />
        </section>
        <section id="projets" className="section section--accent">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
