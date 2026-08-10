import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './comp/Register';
import Login from './comp/Login';
import Dashboard from './comp/Dashboard';
import PrivateRoute from './comp/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
