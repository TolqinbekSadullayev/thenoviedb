// import { Navbar } from 'react-bootstrap';
import './App.css';
// import Footer from './Components/Footer';
import Navbars from './Components/Navbars'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <div className='App-header'>
     <Navbars/>
     {/* <Footer/> */}
    <Outlet/>
     </div>
    </div>
  );
}

export default App;
