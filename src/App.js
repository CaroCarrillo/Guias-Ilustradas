import './App.css';
import Usuario from './components/Usuario';
//import Signin from './components/Signin';
import Xa from './components/Xa.jsx';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Usuario/>
        <Switch>
    
          <Route path='/'>
          <Xa  />
          </Route>
                
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
