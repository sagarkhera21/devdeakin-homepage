import './App.css';
import {Authent} from './Authentication';
import Signup from './Signup';
import Login from './Login';
import Webpage from './Webpage';
import Web from './Web';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className ="container">
      <Router>
        <Authent>
          <Routes>
            <Route path = "/" element ={<Webpage />} />
            <Route path = "/login" element ={<Login />} />
            <Route path = "/signup" element ={<Signup />} />
            <Route path = "/web" element ={<Web />} />
          </Routes>
          
        </Authent>
      </Router>
    </div>


  );
}

export default App;