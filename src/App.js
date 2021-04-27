import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import MainContainer from './components/MainContainer/MainContainer';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/dogs"><MainContainer/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
