import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,  Routes, Route, Navigate} from 'react-router-dom';
import Gestion from './routes/Gestion';
import Crud from './routes/Crud';
import Profesores from './routes/Profesor';
import HorarioTable from './routes/HorarioTable';
import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from './pages/Home/Blog';
import Horario5e from './routes/Horario5e';
import Inicio from './routes/Inicio';
import Home from './routes/Home';
import Reseña from './routes/Reseña';
import Ubicacion from './routes/Ubicacion';
import DeberesDerechos from './routes/DeberesDerechos';
import ReglamentoEscolar from './routes/ReglamentoEscolar';
import EditarHorario from './routes/EditarHorario';
import Horarios from './routes/Horarios';
import Login from './routes/Login';

const isAuth = localStorage.getItem('token')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/gestion" element={<Gestion />} />
      <Route path="/gestion/horario" element={<HorarioTable />} />
      <Route path="/" element={<Home />} />
      <Route path="/horario" element={<Horarios />} />
      <Route path="/reseña" element={<Reseña />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/derechos-derechos" element={<DeberesDerechos />} />
      <Route path="/reglamento-escolar" element={<ReglamentoEscolar />} />
      <Route path="/edit-horario" element={<EditarHorario />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/login" element={isAuth ? <Navigate to="/edit-horario" /> : <Login />} />
    </Routes>
  </BrowserRouter>
);