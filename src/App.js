
import './App.css';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Bookings from './Components/Bookings';
import Link from './Components/Link';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
     
      <Router>

  <Navbar/>
  <Routes>
  <Route path='/' element={<Link/>}/>
  <Route path='/home' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/booking'element={<Bookings/>}/>

 </Routes>
  </Router>


    </div>
  );
}

export default App;
