import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';
import text from '../text.json';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
            <Route path="/portfolio" component={Portfolio}/>
            {/* <Home text={page}/>
            <Portfolio/> */}
          </Switch>
        </div>
      </Router>
    );
}

export default App;