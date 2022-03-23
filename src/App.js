import './App.css';
import Usuario from './components/Usuario/Usuario';
import FormSignin from './components/FormSignin';
import FormRecoverPassword from './components/FormRecoverPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Usuario/>
        <Routes>
          <Route path='/manual' element={<FormSignin/>} exact />
          <Route path='/planeacion' element={<FormRecoverPassword/>} exact />

        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
