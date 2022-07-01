import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import About from './Pages/About';
import Skills from './Pages/Skills';
import BestProject from './Pages/BestProject';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <BestProject/>
    </div>
  );
}

export default App;
