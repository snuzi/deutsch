import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

function App() {
  return (
    <div className="App">        
        <div> 
            <Home/>
        </div>
    </div>
  );
}

export default App;
