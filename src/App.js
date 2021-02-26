import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, MyPokemon, DetailPokemon } from './pages';
import { Navbar } from './components';
import { MainWrapper } from './App.style';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <MainWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-pokemon" component={MyPokemon} />
            <Route exact path="/pokemon/:id" component={DetailPokemon} />
          </MainWrapper>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
