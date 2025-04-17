import { useState } from 'react'
import './App.css'
import dmLogo from './assets/dm-logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="login-container">
      <img src={dmLogo} alt="DM Logo" className="login-logo" />
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
        </div>
        <button className="login-button">
          Login
        </button>
      </div>
    </div>
  )
}

export default App
