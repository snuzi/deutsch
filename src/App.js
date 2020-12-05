import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import QuizPage from './pages/quiz';
import { Route, Switch, NavLink, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <body className="">
      <main>
        <div className="App">
             <BrowserRouter>
                <div>
                    <NavLink className={'active'} to={"/quiz"}>Quiz</NavLink>
                    <NavLink className={'active'} to={"/"}>Home</NavLink>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/quiz" component={QuizPage} />
                </Switch>    
            </BrowserRouter> 
        </div>
      </main>
    </body>
  );
}



export default App;
