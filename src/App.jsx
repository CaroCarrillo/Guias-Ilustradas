import './App.css';
import Usuario from './Usuario';
//import FormRecoverPassword from './FormRecoverPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrincipalPageCucei from './PrincipalPageCucei';
import ErrorPage404 from './ErrorPage404';
import FormLogin from './FormLogin';
import FormRecoverPassword from './FormRecoverPassword';
import FormRecoverPassword2 from './FormRecoverPassword2';
import FormSignin from './FormSignin';
import EditInformation from './EditInformation';
import {MateriaTable} from './MateriaTable';
import {MateriaInfo} from './MateriaInfo';
//import {Cronograma} from './Cronograma';



function App() {
    return (
    
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PrincipalPageCucei/>} exact />
          <Route path='/Manual' element={<ErrorPage404/>} exact />
          <Route path='/Ingresar' element={<FormLogin/>} exact />
          <Route path='/OlvideContrasena' element={<FormRecoverPassword/>} exact />
          <Route path='/OlvideContrasena2' element={<FormRecoverPassword2/>} exact />
          <Route path='/Registro' element={<FormSignin/>} exact />
          <Route path='/EditarInformacion' element={<EditInformation/>} exact />
          <Route path='/Cursos' element={<MateriaTable/>} exact />
          <Route path='/Materia' element={<MateriaInfo/>} exact />
          <Route path='/Usuario' element={<Usuario/>} exact />
          {/*<Route path='/Moncho' element={<Cronograma/>} exact />*/}
        </Routes>
      </Router>
            
    </div>
  );
}

export default App;
