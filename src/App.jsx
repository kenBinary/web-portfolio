import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import './styles/app.css';
function App() {
  let [mousePosition, setMousePosition] = useState({
    'x': 0,
    'y': 0
  });
  function updateMousePosition(event) {
    setMousePosition(
      {
        'x': event.clientX,
        'y': event.clientY
      }
    );
  }

  return (
    <>
      <div onMouseMove={updateMousePosition}>
        <CustomCursor coordinates={mousePosition}></CustomCursor>
        <NavBar></NavBar>
        <AboutPage></AboutPage>
        <SkillsPage></SkillsPage>
        <ProjectPage></ProjectPage>
        <EducationPage></EducationPage>
        <ContactPage></ContactPage>
      </div >
    </>
  );
}

export default App;
