import './App.css';
import Usuario from './Usuario';
//import FormRecoverPassword from './FormRecoverPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditInformation from './EditInformation';
import ErrorPage404 from './ErrorPage404';
import { Cronograma } from './Cronograma'
import { Unidad } from './Unidad';


import PrincipalPageCucei from './PrincipalPageCucei';

function App() {
  return (
    <div>
      <Unidad/>

      {/* <PrincipalPageCucei/>
      <Router>
        <Usuario/>
        <Routes>
          <Route path='/Manual' element={<ErrorPage404/>} exact />
          <Route path='/Cursos' element={<EditInformation/>} exact />
          <Route path='/Usuario' element={<Usuario/>} exact />


        </Routes>
      </Router> */}
            
    </div>
  );
}

export default App;
