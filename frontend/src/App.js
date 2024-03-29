import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState(null);
  const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, })
      .then(response => {
        setStatus(response.data.status);
        console.log(response.data.status,response.data.message);
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {status !== null && (
        <p>Status: {status.toString()}</p>
      )}
    </div>
  );
}

export default App;
