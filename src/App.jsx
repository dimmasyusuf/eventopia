import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/event/:id' element={<EventDetail />} />
        <Route path='/create' element={<CreateEvent />} />
      </Routes>
    </>
  );
}

export default App;
