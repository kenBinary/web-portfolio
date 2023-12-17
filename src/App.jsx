import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import './styles/app.css';
function App() {
  return (
    <>
      <NavBar></NavBar>
      <AboutPage></AboutPage>
      <SkillsPage></SkillsPage>
      <ProjectPage></ProjectPage>
      <EducationPage></EducationPage>
      <ContactPage></ContactPage>
    </>
  );
}

export default App;
