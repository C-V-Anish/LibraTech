import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignupLoginModal from './components/Modal';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignupLoginModal isOpen={true} onClose={() =>{}} isLoginView={false} />} />
          <Route path="/login" element={<SignupLoginModal isOpen={true} onClose={() => {}} isLoginView={true} />} />
          <Route path="/books" element={<Books />} />
        </Routes>
    </div>
  );
}

export default App;
