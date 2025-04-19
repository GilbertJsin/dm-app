import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App
