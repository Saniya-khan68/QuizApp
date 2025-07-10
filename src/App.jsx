 import { Router, Route, Switch } from 'wouter-preact';
import Login from './Components/Login';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
