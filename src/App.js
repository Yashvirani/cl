import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="app">
      
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
          <Route path="/">
             <TinderCards />
             <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
