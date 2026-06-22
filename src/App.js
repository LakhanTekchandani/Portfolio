import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Footer from './Components/Footer';
import Lightfall from "./Components/Lightfall";


function App() {
  return (
   <>
   <div className="bg-wrapper">
    <Lightfall
      colors={['#33b2a1','#ffffff','#e75106']}
      backgroundColor="#0b1515"
      speed={0.5}
      streakCount={2}
      streakWidth={1}
      streakLength={1}
      glow={1}
      density={0.6}
      twinkle={1}
      zoom={3}
      backgroundGlow={0.5}
      opacity={1}
      mouseInteraction
      mouseStrength={0.5}
      mouseRadius={1}
    />
  </div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/footer' element={<Footer/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
