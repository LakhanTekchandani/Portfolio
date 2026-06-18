import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Footer from './Components/Footer';


function App() {
  return (
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
  );
}

export default App;
