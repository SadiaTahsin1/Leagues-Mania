import Home from './components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
       <Router>
      <Switch>
      <Route path="/home">
       <Home></Home>
      </Route>
      
      <Route path="/:lid">
       <LeagueDetail></LeagueDetail>
      </Route>
     
      <Route path="/">
      <Home></Home>
      </Route>
      
    </Switch>
  </Router>
    </div>
  );
}

export default App;
