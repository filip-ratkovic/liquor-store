import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/Nav.css';
import './style/Pocetna.css';

// import url('https://fonts.googleapis.com/css2?family=Joan&family=Poppins:wght@100&display=swap');
import Nav from './components/Nav';
import Pocetna from './components/Pocetna';
import Asortiman from './components/Asortiman';
import Kontakt from './components/Kontakt';
import ONama from './components/ONama';
import Objekti from './components/Objekti';
import Akcije from './components/Akcije';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route  path="/" element={<Pocetna/>}/>
        <Route  path="/asortiman" element={<Asortiman/>}/>
        <Route  path="/kontakt" element={<Kontakt/>}/>
        <Route  path="/Onama" element={<ONama/>}/>
        <Route  path="/prodajniobjekti" element={<Objekti/>}/>
        <Route  path="/akcije" element={<Akcije/>}/>
      </Routes>
    </div>
  );
}

export default App;
