import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import './styles/app.css';
function App() {
  return (
    <>
      <NavBar></NavBar>
      <AboutPage></AboutPage>
      <SkillsPage></SkillsPage>
      <div className='test'></div>
      <div className='test-two'></div>
    </>
  );
}

export default App;
