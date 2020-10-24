import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
             <TinderCards />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
