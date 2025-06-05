import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Di sini kamu bisa tambahkan logic POST ke backend Laravel nanti
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '10px', margin: '5px', width: '250px' }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '10px', margin: '5px', width: '250px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
            Login
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
