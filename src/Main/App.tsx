import Home from '../Home/Home';
import MeButton from '../Portfolio/MeButton/MeButton';
import './App.css';
import text from '../text.json';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Barkipedia from '../Portfolio/Barkipedia/Barkipedia';
import Hypertrophy from '../Portfolio/Hypertrophy/Hypertrophy';
import PhoneUnlock from '../Portfolio/PhoneUnlock/PhoneUnlock';
import StudyShuffle from '../Portfolio/StudyShuffle/StudyShuffle';

function App() {
  var page = text[0].content.text ?? "";
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home text={page}/>
            </Route>
            <Route path="/home" >
              <Home text={page}/>
            </Route>
            <Route path="/portfolio5" component={StudyShuffle}/>
            <Route path="/portfolio4" component={PhoneUnlock}/>
            <Route path="/portfolio3" component={MeButton}/>
            <Route path="/portfolio2" component={Barkipedia}/>
            <Route path="/portfolio1" component={Hypertrophy}/>
          </Switch>
        </div>
      </Router>
    );
}

export default App;