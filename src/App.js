import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import QuizPage from './pages/quiz';
import { Route, Switch, NavLink, BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const history = createBrowserHistory();

ReactGA.initialize('UA-55779882-1');

ReactGA.set({ page: 'Home page' }); // Update the user's current page
ReactGA.pageview('Home page'); // Record a pageview for the given page

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function App() {
  return (
    <body className="">
        <main>
            <div className="App">
                <Router history={history}>
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
                </Router> 
            </div>
        </main>
    </body>
  );
}



export default App;
