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
                    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
                        <a class="navbar-brand" href="#">Deutsch lernen</a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarsExample09">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <NavLink className={'nav-link'} to={"/"}>Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className={'nav-link'} to={"/quiz"}>Quiz</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                   
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
