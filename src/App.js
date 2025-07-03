import { Link, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"
import './App.css';


function App() {
  return(
    <>
    <nav>
      <Link to="/" className='mx-2'>Home</Link>
      <Link to="/about" className='mx-2'>About</Link>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
    </Routes>

    </>
    
  )

};

export default App;
