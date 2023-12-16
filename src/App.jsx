// import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import './styles/app.css';
function App() {
  return (
    <>
      <NavBar></NavBar>
      <AboutPage></AboutPage>
      <div className='test-two'></div>
      <div className='test'></div>
      <div className='test-two'></div>
    </>
  );
}

export default App;
