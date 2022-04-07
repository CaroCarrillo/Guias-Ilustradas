import './App.css';
import Usuario from './Usuario';
//import FormRecoverPassword from './FormRecoverPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditInformation from './EditInformation';
import ErrorPage404 from './ErrorPage404';

function App() {
  return (
    <div>
      <Router>
        <Usuario/>
        <Routes>
          <Route path='/Manual' element={<ErrorPage404/>} exact />
          <Route path='/Cursos' element={<EditInformation/>} exact />

        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
