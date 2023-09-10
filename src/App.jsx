import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/event/:id' element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default App;
