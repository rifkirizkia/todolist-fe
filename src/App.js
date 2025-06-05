import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './login/screen/login';
import RegisterScreen from './register/screen/register';
import HomeScreen from './home/screen/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
