import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Courses from "./components/Courses.jsx";
import Jobs from "./components/Jobs.jsx";
import Resume from "./components/Resume.jsx";
import Food from "./components/Food.jsx";
import Business from "./components/Business.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#cursos">
        Pular para o conteúdo
      </a>
      <Nav />
      <Hero />
      <main>
        <Courses />
        <Jobs />
        <Resume />
        <Food />
        <Business />
      </main>
      <Footer />
    </>
  );
}
